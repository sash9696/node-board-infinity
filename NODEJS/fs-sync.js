const { readFileSync, writeFileSync } = require('fs');

const firstText = readFileSync('./content/first.txt', 'utf-8');
const secondText = readFileSync('./content/second.txt', 'utf-8');

// console.log(firstText, secondText)
writeFileSync('./content/result-sync.txt', `This is the result : ${firstText}, ${secondText}`)

