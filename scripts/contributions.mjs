// Regenerates the GitHub contribution graph embedded in site/index.html.
// Reads the public contributions fragment (no token), writes an inline SVG
// between the contributions markers, and updates the caption summary.
import { readFileSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const user = 'BohdanChuprynka';
const page = join(resolve(import.meta.dirname, '..'), 'site', 'index.html');
const response = await fetch(`https://github.com/users/${user}/contributions`, {
  headers: { 'user-agent': 'Mozilla/5.0 (portfolio contributions refresh)' }
});
if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
const html = await response.text();

const counts = new Map();
for (const match of html.matchAll(/<tool-tip[^>]*\bfor="([^"]+)"[^>]*>([^<]*)<\/tool-tip>/g)) {
  const number = match[2].match(/^(\d+|No) contribution/);
  if (number) counts.set(match[1], number[1] === 'No' ? 0 : Number(number[1]));
}
const days = [];
for (const match of html.matchAll(/<td\b[^>]*\bdata-date="[^"]+"[^>]*>/g)) {
  const tag = match[0];
  const attribute = (name) => tag.match(new RegExp(`\\b${name}="([^"]+)"`))?.[1];
  const id = attribute('id');
  const [, row, column] = id.match(/-(\d+)-(\d+)$/).map(Number);
  days.push({ date: attribute('data-date'), level: Number(attribute('data-level')), row, column, count: counts.get(id) ?? 0 });
}
if (days.length < 300) throw new Error(`Parsed only ${days.length} days; GitHub markup may have changed.`);
days.sort((a, b) => a.date.localeCompare(b.date));

const cell = 12, gap = 2, pitch = cell + gap, top = 20;
const columns = Math.max(...days.map((day) => day.column)) + 1;
const width = columns * pitch - gap;
const height = top + 7 * pitch - gap;
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const longDate = (iso) => { const [y, m, d] = iso.split('-').map(Number); return `${d} ${months[m - 1]} ${y}`; };
const dotted = (iso) => iso.split('-').reverse().join('.');

const labels = [];
let previousMonth = -1;
for (let column = 0; column < columns; column += 1) {
  const first = days.filter((day) => day.column === column).sort((a, b) => a.row - b.row)[0];
  if (!first) continue;
  const month = Number(first.date.slice(5, 7)) - 1;
  if (month !== previousMonth) labels.push({ column, text: months[month] });
  previousMonth = month;
}
const spaced = labels.filter((label, index) => !labels[index + 1] || labels[index + 1].column - label.column >= 3);

const rects = days.map((day) => {
  const x = day.column * pitch, y = top + day.row * pitch;
  const tip = day.count === 0 ? `No contributions on ${longDate(day.date)}` : `${day.count} contribution${day.count === 1 ? '' : 's'} on ${longDate(day.date)}`;
  return `<rect class="c${day.level}" x="${x}" y="${y}" width="${cell}" height="${cell}" data-date="${day.date}" data-count="${day.count}"><title>${tip}</title></rect>`;
}).join('');
const text = spaced.map((label) => `<text x="${label.column * pitch}" y="0" dominant-baseline="hanging">${label.text}</text>`).join('');
const total = days.reduce((sum, day) => sum + day.count, 0);
const range = `${dotted(days[0].date)} – ${dotted(days.at(-1).date)}`;
const count = total.toLocaleString('en-US');
const summary = `${count} contributions, ${range}.`;
const svg = `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="GitHub contribution calendar, ${summary}">${text}${rects}</svg>`;

let source = readFileSync(page, 'utf8');
const splice = (name, content) => {
  const pattern = new RegExp(`(<!-- contributions:${name}:start -->)[\\s\\S]*?(<!-- contributions:${name}:end -->)`);
  if (!pattern.test(source)) throw new Error(`Marker contributions:${name} missing in site/index.html`);
  source = source.replace(pattern, `$1${content}$2`);
};
splice('svg', svg);
splice('summary', `<b>${count}</b> contributions, ${range}.`);
writeFileSync(page, source);
console.log(`Contribution graph updated: ${summary} (${days.length} days, ${columns} weeks)`);
