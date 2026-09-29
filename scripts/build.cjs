const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'dist');
const files = ['index.html', 'style.css', 'content.js', 'assets/wecover-mark.svg', 'screens/19.html', 'screens/27.html', 'screens/30.html', 'screens/39.html', 'screens/19-en.html', 'screens/39-en.html', 'screens/27-en.html', 'assets/team/sungho-kim-qr.svg', 'assets/team/seonghwan-cho-qr.svg', 'assets/team/juyeon-kim-qr.svg', 'assets/team/seohyun-yoon-qr.svg'];
fs.mkdirSync(output, { recursive: true });
for (const file of files) {
  const destination = path.join(output, file);
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.copyFileSync(path.join(root, file), destination);
}
console.log(`Built ${files.length} static files in dist/`);
