import {
    Console
} from 'console';
import fs from 'fs';

const file = fs.createWriteStream('application.txt');

const log = new Console({
    stdout: file,
    stderr: file,
});

log.log('Hello world!');
log.error('Hello world!');

const person = {
    firstName: 'Eko',
    lastName: 'Kurniawan'
};

log.table(person);