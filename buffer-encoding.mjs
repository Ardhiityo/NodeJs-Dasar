const buffer = Buffer.from('Eko Kurniawan', 'utf8');

console.log(buffer.toString());
console.log(buffer.toString('hex'));
console.log(buffer.toString('base64'));

const bufferBase64 = Buffer.from('RWtvIEt1cm5pYXdhbg==', 'base64');

console.log(bufferBase64.toString('utf8'));