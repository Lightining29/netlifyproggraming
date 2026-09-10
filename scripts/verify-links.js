/**
 * PROGRAMMINGWALA - Internal Link Integrity Validator
 * Checks every <a href="..."> across all 302 HTML pages to ensure zero broken links.
 */

const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.resolve(__dirname, '..');

function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') {
        getAllHtmlFiles(filePath, fileList);
      }
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  }
  return fileList;
}

function checkLinkIntegrity() {
  console.log('=== VERIFYING INTERNAL LINK INTEGRITY ===');
  const htmlFiles = getAllHtmlFiles(ROOT_DIR);
  let checkedLinksCount = 0;
  let brokenLinks = 0;

  for (const htmlFile of htmlFiles) {
    const content = fs.readFileSync(htmlFile, 'utf8');
    const dir = path.dirname(htmlFile);
    const hrefRegex = /href="([^"#]+)(#[^"]*)?"/gi;
    let match;

    while ((match = hrefRegex.exec(content)) !== null) {
      const rawHref = match[1];

      // Skip external, tel, mailto, javascript links
      if (
        rawHref.startsWith('http://') ||
        rawHref.startsWith('https://') ||
        rawHref.startsWith('tel:') ||
        rawHref.startsWith('mailto:') ||
        rawHref.startsWith('javascript:')
      ) {
        continue;
      }

      checkedLinksCount++;
      let targetPath;

      if (rawHref.startsWith('/')) {
        // Absolute path from site root
        const cleanHref = rawHref.replace(/^\//, '');
        if (cleanHref.endsWith('/') || !path.extname(cleanHref)) {
          targetPath = path.join(ROOT_DIR, cleanHref, 'index.html');
        } else {
          targetPath = path.join(ROOT_DIR, cleanHref);
        }
      } else {
        // Relative path from current file
        if (rawHref.endsWith('/') || !path.extname(rawHref)) {
          targetPath = path.resolve(dir, rawHref, 'index.html');
        } else {
          targetPath = path.resolve(dir, rawHref);
        }
      }

      if (!fs.existsSync(targetPath)) {
        console.error(`[BROKEN LINK] In ${path.relative(ROOT_DIR, htmlFile)} -> href="${rawHref}" (Target missing: ${path.relative(ROOT_DIR, targetPath)})`);
        brokenLinks++;
      }
    }
  }

  console.log(`Inspected ${checkedLinksCount} internal links across ${htmlFiles.length} pages.`);
  console.log(`Broken Links Detected: ${brokenLinks}`);

  if (brokenLinks > 0) {
    process.exit(1);
  } else {
    console.log('SUCCESS: All internal links resolved with 100% integrity.');
  }
}

checkLinkIntegrity();
