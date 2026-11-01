const fs = require('fs');
const content = fs.readFileSync('index_clean.js', 'utf8');

// Find all zones
const zoneDef = content.match(/\{\s*id:\s*["'][^"']+["'],\s*name:\s*["'][^"']+["'][^}]*\}/g) || [];
console.log('Zone definitions:', zoneDef);

// Find action bar buttons
const actionRegex = /label:\s*["']([^"']+)["']/g;
const labels = [];
let match;
while ((match = actionRegex.exec(content)) !== null) {
  labels.push(match[1]);
}
console.log('Action labels:', labels);

// Find quests / tu tap
const quests = content.match(/title:\s*["']([^"']+)["']/g) || [];
console.log('Titles found:', quests.slice(0, 30));

