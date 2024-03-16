function samplePromise() {
    return Promise.resolve('Eko');
}

// mjs by default sudah berjalan secara async
const name = await samplePromise();
console.log(name);
