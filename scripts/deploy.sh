#!/bin/bash
# Deploy script for liveinportmoody.com
# Retrieves credentials from AWS Secrets Manager and deploys to Vercel
# Usage: ./scripts/deploy.sh [--prod|--preview]

set -euo pipefail

# Configuration
REGION="us-west-2"
SECRET_ID="liveinportmoody/vercel-token"
DEPLOY_ENV="${1:---preview}"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to log messages
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1" >&2
    exit 1
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

# Verify prerequisites
log "Checking prerequisites..."

if ! command -v aws &> /dev/null; then
    error "AWS CLI is not installed. Install it first: https://aws.amazon.com/cli/"
fi

if ! command -v vercel &> /dev/null; then
    error "Vercel CLI is not installed. Install it: npm install -g vercel"
fi

# Verify AWS credentials
if ! aws sts get-caller-identity --region "$REGION" > /dev/null 2>&1; then
    error "AWS credentials not configured or expired. Run: aws configure"
fi

# Retrieve Vercel token from Secrets Manager
log "Retrieving Vercel token from AWS Secrets Manager..."

VERCEL_TOKEN=$(aws secretsmanager get-secret-value \
    --secret-id "$SECRET_ID" \
    --region "$REGION" \
    --query SecretString \
    --output text 2>/dev/null) || error "Failed to retrieve Vercel token. Check your AWS credentials."

if [ -z "$VERCEL_TOKEN" ]; then
    error "Vercel token is empty. Check the secret in Secrets Manager."
fi

log "Token retrieved successfully (${#VERCEL_TOKEN} characters)"

# Export token for Vercel CLI
export VERCEL_TOKEN

# Check for uncommitted changes
log "Checking git status..."

if ! git diff-index --quiet HEAD --; then
    warn "You have uncommitted changes. They will NOT be included in the deploy."
    read -p "Continue? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        error "Deploy cancelled."
    fi
fi

# Determine deploy target
if [ "$DEPLOY_ENV" = "--prod" ] || [ "$DEPLOY_ENV" = "prod" ] || [ "$DEPLOY_ENV" = "production" ]; then
    DEPLOY_TARGET="production"
    DEPLOY_FLAGS="--prod"
    warn "PRODUCTION DEPLOYMENT - This will affect your live site!"
    read -p "Are you sure? Type 'yes' to continue: " -r
    if [ "$REPLY" != "yes" ]; then
        error "Production deploy cancelled."
    fi
else
    DEPLOY_TARGET="preview"
    DEPLOY_FLAGS=""
    log "Preview deployment (not affecting production)"
fi

# Get current commit info
COMMIT_SHA=$(git rev-parse --short HEAD)
COMMIT_MSG=$(git log -1 --pretty=%B)

log "Deploying commit $COMMIT_SHA: ${COMMIT_MSG:0:50}..."

# Deploy to Vercel
log "Starting Vercel deployment..."

if vercel $DEPLOY_FLAGS; then
    log "✅ Deployment successful!"

    if [ "$DEPLOY_TARGET" = "production" ]; then
        log "🎉 Your site is live at: https://liveinportmoody.com"
    else
        log "Preview URL available in Vercel dashboard"
    fi

    log "Commit: $COMMIT_SHA"
    log "View deployment: vercel ls"
else
    error "Vercel deployment failed. Check the logs above."
fi

# Cleanup
unset VERCEL_TOKEN

exit 0
