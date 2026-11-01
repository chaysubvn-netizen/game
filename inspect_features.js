const fs = require('fs');
const content = fs.readFileSync('index_clean.js', 'utf8');

// Search for modal sheets / menus / features
const sheetMatches = content.match(/class="sheet-title">([^<]+)<\/div>/g) || [];
console.log('Sheet titles:', sheetMatches);

// Search for action buttons
const actionMatches = content.match(/class="action-btn[^"]*"[^>]*>([^<]+)</g) || [];
console.log('Action buttons:', actionMatches);

// Search for zone names
const zones = content.match(/zone["':\s]+([^"',}\n]+)/g) || [];
console.log('Zones sample:', zones.slice(0, 10));

// Find sound synthesis code
console.log('Sound synthesis exists:', content.includes('AudioContext'));

