const { readFile, writeFile } = require('fs');

console.log('starting the process');
readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const first = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const second = result;

        writeFile('./content/result-async.txt', `The result is : ${first} ${second}.`, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('process is completed')
        })
    })
})
console.log('starting with the new process');
console.log('task 1');
console.log('task 2');
console.log('task 3');
console.log('task 4');
console.log('task 5');