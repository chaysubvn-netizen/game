const fs = require('fs');
const content = fs.readFileSync('index_bundle.js', 'utf8');

console.log('GLTFLoader:', content.includes('GLTFLoader'));
console.log('FBXLoader:', content.includes('FBXLoader'));
console.log('OBJLoader:', content.includes('OBJLoader'));
console.log('BoxGeometry:', content.includes('BoxGeometry'));
console.log('CylinderGeometry:', content.includes('CylinderGeometry'));
console.log('AudioContext:', content.includes('AudioContext'));
console.log('WebSocket:', content.includes('WebSocket'));
console.log('PartyKit:', content.includes('partykit'));

// Look for audio / sound synthesis
const synth = content.match(/createOscillator|createGain|createBiquadFilter/g);
console.log('Web Audio Synth:', synth ? synth.length : 0);

// Look for websocket / backend urls
const ws = content.match(/wss?:\/\/[^"'\s`]+/g);
console.log('Websocket URLs:', ws);

// Look for text in Vietnamese
const quotes = content.match(/["'`]([^"'`]*Chùa[^"'`]*)["'`]/gi);
console.log('Chùa references:', quotes ? quotes.slice(0, 5) : []);

