const https = require('https');
const fs = require('fs');

function download(url, dest) {
    return new Promise((resolve, reject) => {
        const file = fs.createWriteStream(dest);
        https.get(url, (response) => {
            if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
                return download(response.headers.location, dest).then(resolve).catch(reject);
            }
            response.pipe(file);
            file.on('finish', () => {
                file.close(resolve);
            });
        }).on('error', (err) => {
            fs.unlink(dest, () => reject(err));
        });
    });
}

download('https://didenchua.online/assets/index-DEyqlFt9.js', 'index_clean.js').then(() => {
    console.log('Downloaded index_clean.js successfully');
    const content = fs.readFileSync('index_clean.js', 'utf8');
    const matches = content.match(/["']([^"']*(?:chùa|kinh|quẻ|hương|công đức|niệm|chuông|hoa đăng|bồ đề|di đà)[^"']*)["']/gi) || [];
    console.log('Sample features / texts:', matches.slice(0, 30));
}).catch(console.error);

