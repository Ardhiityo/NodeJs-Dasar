/*
c : continue execution
n : step next
s : step in
o : step out
pause : pause running code
*/

function sayHello(name) {
    debugger;
    return `Hello ${name}`;
}

const name = 'Eko';
console.log(sayHello(name));