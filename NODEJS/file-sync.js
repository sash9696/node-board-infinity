const { readFileSync, writeFileSync } = require('fs');

console.log('start the process');
const first = readFileSync('./content/first.txt', 'utf-8');

const second = readFileSync('./content/second.txt', 'utf-8');

writeFileSync('./content/result-sync.txt', `The result is : ${first} ${second}`)

console.log('process is completed');
console.log('starting with the new process');

//5 secs

//all the 100 lines of code


