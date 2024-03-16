import fs from 'fs';
import zlib from 'zlib';

const reader = fs.readFileSync('zlib-compress.mjs');
// console.log(reader.toString());

const compress = zlib.gzipSync(reader);
// console.log(compress.toString());

fs.writeFileSync('zlib-compress.mjs.txt', compress);