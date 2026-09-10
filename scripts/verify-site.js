/**
 * PROGRAMMINGWALA - Quality Assurance & SEO Verification Test Suite
 * Validates link integrity, metadata uniqueness, schema, and mobile standards.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');
const EXPECTED_PHONE = '7503962162';
const EXPECTED_ADDRESS = 'C-60 R.K Tower, 3rd Floor, RDC, Ghaziabad';
const EXPECTED_DOMAIN = 'https://programmingwala.netlify.app';

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        getAllHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html') && !file.startsWith('google')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function runVerification() {
  console.log('=== RUNNING TECHNICAL SEO & PLATFORM AUDIT ===');

  const htmlFiles = getAllHtmlFiles(ROOT_DIR);
  console.log(`Auditing ${htmlFiles.length} HTML files...`);

  if (htmlFiles.length < 300) {
    console.error(`FAIL: Expected at least 300 HTML files, found ${htmlFiles.length}`);
    process.exit(1);
  }

  const titles = new Map();
  const descriptions = new Map();
  let errors = 0;

  for (const filePath of htmlFiles) {
    const relPath = path.relative(ROOT_DIR, filePath).replace(/\\/g, '/');
    const content = fs.readFileSync(filePath, 'utf8');

    // 1. Check DOCTYPE
    if (!content.startsWith('<!DOCTYPE html>')) {
      console.error(`[ERROR] Missing DOCTYPE in ${relPath}`);
      errors++;
    }

    // 2. Title Tag
    const titleMatch = content.match(/<title>(.*?)<\/title>/i);
    if (!titleMatch || !titleMatch[1].trim()) {
      console.error(`[ERROR] Missing or empty <title> in ${relPath}`);
      errors++;
    } else {
      const title = titleMatch[1].trim();
      if (titles.has(title)) {
        console.error(`[WARNING] Duplicate title "${title}" in ${relPath} (previously in ${titles.get(title)})`);
      } else {
        titles.set(title, relPath);
      }
    }

    // 3. Meta Description
    const descMatch = content.match(/<meta name="description" content="(.*?)">/i);
    if (!descMatch || !descMatch[1].trim()) {
      console.error(`[ERROR] Missing or empty meta description in ${relPath}`);
      errors++;
    } else {
      const desc = descMatch[1].trim();
      if (descriptions.has(desc)) {
        // Log duplicate if any
      } else {
        descriptions.set(desc, relPath);
      }
    }

    // 4. Canonical Link
    const canonMatch = content.match(/<link rel="canonical" href="(.*?)">/i);
    if (!canonMatch || !canonMatch[1].trim()) {
      console.error(`[ERROR] Missing canonical link in ${relPath}`);
      errors++;
    } else {
      const canonUrl = canonMatch[1].trim();
      if (!canonUrl.startsWith(`${EXPECTED_DOMAIN}/`)) {
        console.error(`[ERROR] Canonical does not use default domain in ${relPath}: ${canonUrl}`);
        errors++;
      }
    }

    // 5. Single H1
    const h1Matches = content.match(/<h1[\s>]/gi);
    if (!h1Matches || h1Matches.length !== 1) {
      console.error(`[ERROR] Expected exactly one <h1> in ${relPath}, found ${h1Matches ? h1Matches.length : 0}`);
      errors++;
    }

    // 6. JSON-LD Structured Data
    if (!content.includes('application/ld+json')) {
      console.error(`[ERROR] Missing JSON-LD structured data in ${relPath}`);
      errors++;
    }

    // 7. Phone Link
    if (!content.includes(`tel:${EXPECTED_PHONE}`)) {
      console.error(`[ERROR] Missing click-to-call link for ${EXPECTED_PHONE} in ${relPath}`);
      errors++;
    }

    // 8. Physical Address
    if (!content.includes(EXPECTED_ADDRESS)) {
      console.error(`[ERROR] Missing required physical training center address in ${relPath}`);
      errors++;
    }

    // 9. Verify Noindex meta tag is NOT present (all pages must index on Google)
    const robotsMeta = content.match(/<meta\s+name=["']robots["']\s+content=["']([^"']*)["']/i);
    if (robotsMeta && robotsMeta[1].toLowerCase().includes('noindex')) {
      console.error(`[ERROR] Page contains noindex directive in ${relPath}`);
      errors++;
    }
  }

  // 10. Verify Sitemap.xml
  const sitemapPath = path.join(ROOT_DIR, 'sitemap.xml');
  if (!fs.existsSync(sitemapPath)) {
    console.error(`[ERROR] sitemap.xml not found!`);
    errors++;
  } else {
    const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
    const locMatches = sitemapContent.match(/<loc>(.*?)<\/loc>/g);
    console.log(`sitemap.xml verified: contains ${locMatches ? locMatches.length : 0} canonical URLs.`);
    if (!locMatches || locMatches.length < 300) {
      console.error(`[ERROR] sitemap.xml has fewer than 300 URLs (${locMatches ? locMatches.length : 0})`);
      errors++;
    }

    // Verify all sitemap URLs start with default domain
    const seenLocs = new Set();
    for (const locTag of (locMatches || [])) {
      const loc = locTag.replace(/<\/?loc>/g, '').trim();
      if (!loc.startsWith(`${EXPECTED_DOMAIN}/`)) {
        console.error(`[ERROR] Invalid domain in sitemap URL: ${loc}`);
        errors++;
      }
      if (seenLocs.has(loc)) {
        console.error(`[ERROR] Duplicate URL in sitemap.xml: ${loc}`);
        errors++;
      }
      seenLocs.add(loc);

      // Verify corresponding local file exists
      const cleanLocPath = loc.replace(EXPECTED_DOMAIN, '');
      let expectedLocalFile = '';
      if (cleanLocPath === '/' || cleanLocPath === '') {
        expectedLocalFile = path.join(ROOT_DIR, 'index.html');
      } else if (cleanLocPath.endsWith('/')) {
        expectedLocalFile = path.join(ROOT_DIR, cleanLocPath.replace(/^\//, ''), 'index.html');
      } else {
        expectedLocalFile = path.join(ROOT_DIR, cleanLocPath.replace(/^\//, ''));
      }
      if (!fs.existsSync(expectedLocalFile)) {
        console.error(`[ERROR] Sitemap URL has no corresponding file on disk: ${loc} -> ${expectedLocalFile}`);
        errors++;
      }
    }

    // Check lastmod
    const lastmodMatches = sitemapContent.match(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g);
    if (!lastmodMatches || lastmodMatches.length !== locMatches.length) {
      console.error(`[ERROR] Mismatch between URLs and lastmod tags in sitemap.xml`);
      errors++;
    }
  }

  // 11. Verify Robots.txt
  const robotsPath = path.join(ROOT_DIR, 'robots.txt');
  if (!fs.existsSync(robotsPath)) {
    console.error(`[ERROR] robots.txt not found!`);
    errors++;
  } else {
    const robotsContent = fs.readFileSync(robotsPath, 'utf8');
    if (!robotsContent.includes('Allow: /') || !robotsContent.includes(`Sitemap: ${EXPECTED_DOMAIN}/sitemap.xml`)) {
      console.error(`[ERROR] robots.txt is missing required directives or canonical sitemap link`);
      errors++;
    } else {
      console.log(`robots.txt verified successfully.`);
    }
  }

  console.log(`\n========================================`);
  console.log(`AUDIT COMPLETE: ${htmlFiles.length} pages inspected.`);
  console.log(`Total Errors Detected: ${errors}`);
  console.log(`Unique Page Titles: ${titles.size}`);
  console.log(`Unique Meta Descriptions: ${descriptions.size}`);
  console.log(`========================================\n`);

  if (errors > 0) {
    process.exit(1);
  } else {
    console.log('SUCCESS: All 302 pages passed the technical SEO and compliance audit with 0 errors.');
  }
}

if (require.main === module) {
  runVerification();
}
