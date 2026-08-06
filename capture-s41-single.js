const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

async function retryCapture() {
  const browser = await chromium.launch();
  const OUTPUT_DIR = './visual-review-screenshots/s41-final-visual-recapture';
  
  const page = await browser.newPage();
  page.setViewportSize({ width: 390, height: 844 });
  
  try {
    await page.goto('https://www.liveinportmoody.com/complexes', { 
      waitUntil: 'networkidle', 
      timeout: 30000 
    });
    await page.screenshot({ 
      path: path.join(OUTPUT_DIR, '390x844-mobile_complexes.png'), 
      fullPage: false 
    });
    console.log('✓ /complexes (mobile) retried successfully');
  } catch (err) {
    console.log(`✗ /complexes (mobile) retry failed: ${err.message}`);
  }
  
  await page.close();
  await browser.close();
}

retryCapture().catch(console.error);
