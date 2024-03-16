import timer from 'timers/promises';

// console.log(new Date());
// const eko = await timer.setTimeout(1000, 'Eko');
// console.log(new Date());
// console.log(eko);

for await (const time of timer.setInterval((1000), new Date())) {
    console.log(new Date());
    // console.log(time);
}
