function samplePromise() {
    return Promise.resolve('Eko');
}

// Error (non mjs by default berjalan secara sync)
// const name = await samplePromise();
// console.log(name);

// Success
async function run() {
    const name = await samplePromise();
    console.log(name);
}
run();