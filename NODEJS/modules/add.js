//A module is an encapsulated and reusable chunk of code that has its own context.
//Node js => each file has a seperate module

//Types of modules
//Local modules => Modules that we create in an app
//Built-in modules => Modules inside that is inside Node js
//Third Party Modules =>Modules in your app that are written by other developers

const add = (a, b) => {
    return a + b;
}

const sum = add(10, 20);
console.log(sum)
