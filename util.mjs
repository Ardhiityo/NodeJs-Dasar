import util from 'util';

const firstName = "Eko";
const lastName = "Khannedy";

console.log(`Hello ${firstName} ${lastName}`);
console.log(util.format('Hello %s', firstName, lastName));

const person = {
    firstName: 'Eko',
}

console.log('Hello',JSON.stringify(person));
console.log(util.format('Hello %j', person));