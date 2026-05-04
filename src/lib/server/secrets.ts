import { GetSecretValueCommand, SecretsManagerClient } from "@aws-sdk/client-secrets-manager";

const cache = new Map<string, string>();

export async function getSecretValue(secretId: string, jsonKey?: string) {
  const cacheKey = `${secretId}:${jsonKey || ""}`;
  const cached = cache.get(cacheKey);
  if (cached) return cached;

  const client = new SecretsManagerClient({
    region: process.env.AWS_REGION || process.env.AWS_DEFAULT_REGION || "us-west-2",
  });
  const response = await client.send(new GetSecretValueCommand({ SecretId: secretId }));
  const rawValue = response.SecretString;

  if (!rawValue) throw new Error(`AWS secret ${secretId} has no SecretString value.`);

  let value = rawValue;
  if (jsonKey) {
    const parsed = JSON.parse(rawValue) as Record<string, string | undefined>;
    value = parsed[jsonKey] || "";
  } else {
    try {
      const parsed = JSON.parse(rawValue) as Record<string, string | undefined>;
      value = parsed.api_key || parsed.token || parsed.value || rawValue;
    } catch {
      value = rawValue;
    }
  }

  if (!value) throw new Error(`AWS secret ${secretId} did not contain a usable value.`);
  cache.set(cacheKey, value);
  return value;
}
