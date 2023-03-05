
//1 pattern
// const add = (a, b) => {
//     return a + b;
// }

// module.exports = add

//2 pattern
// module.exports = (a, b) => {
//     return a + b;
// }

//3 pattern 

// const add = (a, b) => {
//     return a + b;
// }
// const subtract = (a, b) => {
//     return a - b;
// }

//4 pattern
// module.exports = {
//     add,
//     subtract
// }


//5th pattern

// module.exports.add = (a, b) => {
//     return a + b;
// }
// module.exports.subtract = (a, b) => {
//     return a - b;
// }


//Common Js
//each file is a module
//variables, functions, classes etc are not accessible by other files by default
//explicitly export via module.exports
//to import the code, we use require()

//ES Modules
//

const add = (a, b) => {
    return a + b;
}

export default add;