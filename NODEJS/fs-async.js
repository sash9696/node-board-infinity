const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err);
        return;
    }
    const firstText = result;

    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err);
            return;
        }
        const secondText = result;

        writeFile('./content/result-async.txt', `The async result is : ${firstText} ${secondText} `, (err, result) => {
            if (err) {
                console.log(err);
                return;
            }
        })

    })
})