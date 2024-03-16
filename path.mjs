import path, { dirname } from 'path';

const file = 'c:/user/contoh.txt';

console.log(path.dirname(file));
console.log(path.extname(file));
console.log(path.basename(file));
console.log(path.join(file, 'views'));