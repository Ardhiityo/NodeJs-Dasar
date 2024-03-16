import process from 'process';

process.addListener('exit', (code) => {
    console.log(`About to exit with code: ${code}`);
});

console.table(process.argv);
console.log(process.version);
console.log('Before process');
process.exit(1)
console.log('After process');