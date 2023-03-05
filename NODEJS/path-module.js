const path = require('path');

console.log(path.sep)

const filePath = path.join('/content', 'subContent', 'test.txt')

const baseName = path.basename(filePath)

console.log(baseName)

const absolutePath = path.resolve(__dirname, 'content', 'subContent', 'test.txt')

console.log(absolutePath)