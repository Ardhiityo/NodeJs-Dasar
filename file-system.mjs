import fs from 'fs/promises';

const buffer = await fs.readFile('file-system.mjs');
console.log(buffer.toString());

await fs.writeFile('file-system.txt', 'Hello NodeJS!');
