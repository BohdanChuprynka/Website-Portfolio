import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { extname, join, resolve } from 'node:path';
import process from 'node:process';

const root = resolve(import.meta.dirname, '..');
const site = join(root, 'site');
const failures = [];

function fail(message) {
  failures.push(message);
}

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

const requiredFiles = ['index.html', '404.html', 'robots.txt', 'sitemap.xml', 'favicon.ico'];
for (const file of requiredFiles) {
  if (!existsSync(join(site, file))) fail(`Missing required file: site/${file}`);
}

if (!existsSync(join(site, 'index.html'))) {
  console.error('Site verification failed:\n- Missing site/index.html');
  process.exit(1);
}

const html = readFileSync(join(site, 'index.html'), 'utf8');
const expectedUrl = 'https://bohdanchuprynka.github.io/Website-Portfolio/';

if (!/<title>Bohdan Chuprynka \| AI Engineer<\/title>/.test(html)) {
  fail('Production page title is missing or incorrect.');
}
if (!html.includes(`<link rel="canonical" href="${expectedUrl}"`)) {
  fail('Canonical production URL is missing or incorrect.');
}
if (!/<meta name="description" content="[^"]{50,180}"/.test(html)) {
  fail('Meta description is missing or outside the expected length.');
}
if (!html.includes('Content-Security-Policy')) {
  fail('Content Security Policy is missing.');
}
if (!html.includes('class="skip-link"')) {
  fail('Keyboard skip link is missing.');
}
if (/<script\b[^>]+src=/i.test(html)) {
  fail('External scripts are not allowed in the production portfolio.');
}
if (/data:image\/png;base64/i.test(html)) {
  fail('Embedded PNG data remains in the HTML; publish local optimized assets instead.');
}

const textFiles = walk(site).filter((file) => ['.html', '.xml', '.txt', '.svg', '.css', '.js'].includes(extname(file).toLowerCase()));
const publicText = textFiles.map((file) => readFileSync(file, 'utf8')).join('\n');
const forbidden = [
  [/\/Users\//i, 'local macOS user path'],
  [/\blocalhost(?::\d+)?\b/i, 'localhost reference'],
  [/North Royalton/i, 'school name'],
  [/\bHigh School\b/i, 'high-school reference'],
  [/\b(?:I am|I\u2019m|I\'m)\s+17\b/i, 'explicit age'],
  [/\b17[- ]years?[- ]old\b/i, 'explicit age'],
  [/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/, 'private key'],
  [/\bAKIA[0-9A-Z]{16}\b/, 'AWS access key'],
  [/\bsk-(?:proj-)?[A-Za-z0-9_-]{20,}\b/, 'API secret'],
  [/\bgh[opusr]_[A-Za-z0-9]{30,}\b/, 'GitHub token'],
  [/\b(?:api[_-]?key|client[_-]?secret|access[_-]?token)\s*[:=]\s*["'][^"']{8,}["']/i, 'credential assignment'],
  [/\b\+?1?[ .-]?\(?\d{3}\)?[ .-]\d{3}[ .-]\d{4}\b/, 'phone number']
];
for (const [pattern, label] of forbidden) {
  if (pattern.test(publicText)) fail(`Sensitive or development-only content found: ${label}.`);
}

const localReferences = new Set();
for (const match of html.matchAll(/(?:src|href)=["'](\.\.?\/[^"'#?]+)["']/gi)) {
  localReferences.add(match[1]);
}
for (const match of html.matchAll(/["'](\.\.?\/[A-Za-z0-9_.-]+\.(?:png|jpe?g|webp|svg|ico))["']/gi)) {
  localReferences.add(match[1]);
}
for (const reference of localReferences) {
  const clean = reference.replace(/^\.\//, '');
  const target = resolve(site, clean);
  if (!target.startsWith(site) || !existsSync(target) || !statSync(target).isFile()) {
    fail(`Broken local asset reference: ${reference}`);
  }
}

for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
  if (!/\balt=(?:"[^"]*"|'[^']*')/i.test(match[0])) {
    fail(`Image is missing alt text: ${match[0].slice(0, 100)}`);
  }
}
for (const match of html.matchAll(/<a\b[^>]*target=["']_blank["'][^>]*>/gi)) {
  const rel = match[0].match(/\brel=["']([^"']+)["']/i)?.[1] ?? '';
  if (!rel.split(/\s+/).includes('noopener') || !rel.split(/\s+/).includes('noreferrer')) {
    fail(`External link is missing noopener/noreferrer: ${match[0].slice(0, 140)}`);
  }
}

const ids = [...html.matchAll(/\bid=["']([^"']+)["']/gi)].map((match) => match[1]);
const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
if (duplicateIds.length) fail(`Duplicate HTML ids: ${duplicateIds.join(', ')}`);

const analyticsPatterns = [/googletagmanager/i, /google-analytics/i, /plausible\.io/i, /posthog/i, /segment\.com/i, /hotjar/i];
if (analyticsPatterns.some((pattern) => pattern.test(publicText))) {
  fail('Unexpected analytics or tracking code found.');
}

if (failures.length) {
  console.error(`Site verification failed (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Site verification passed: ${walk(site).length} published files, ${localReferences.size} local references, no blocked sensitive patterns.`);
