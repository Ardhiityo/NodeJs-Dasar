import {
    URL
} from 'url';

const pzn = new URL('https://www.google.com/search/?kelas=nodejs');

console.log(pzn.toString());
console.log(pzn.pathname);
console.log(pzn.host);
console.log(pzn.searchParams);

pzn.searchParams.append('class', 'NodeJS');
console.log(pzn.searchParams);

pzn.host = 'www.firefox.com';
console.log(pzn.host);

pzn.pathname = 'find';
console.log(pzn.pathname);



