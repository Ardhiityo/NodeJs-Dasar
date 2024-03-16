import fs from 'fs';
import zlib from 'zlib';

const source = fs.readFileSync('zlib-compress.mjs.txt');
const decompress = zlib.unzipSync(source);
console.log(decompress.toString());