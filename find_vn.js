const fs = require('fs');
const content = fs.readFileSync('index_bundle.js', 'utf8');

// Search for any Vietnamese diacritics
const vnRegex = /[a-zA-Z0-9\s,.:;!?"'\(\)-]*[àáảãạăằắẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ][a-zA-Z0-9\s,.:;!?"'\(\)-]*/gi;
const vnMatches = content.match(vnRegex);
console.log('Direct VN matches found:', vnMatches ? vnMatches.length : 0);
if (vnMatches) {
    console.log('Sample VN matches:', vnMatches.slice(0, 20));
}

