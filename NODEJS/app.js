//npm, dependencies, modules, package

//npm
//node package manager
//reuse your own code into other projects
//use can use others code into your project
//you can share your code with others
//for example create an alert component

//two ways 
//create that component from scratch
//use from external package like bootstrap


//local dependency - use it only in a particular project
//npm i <packageName>

//global dependency - use it in any project
//npm install -g <packageName>

//package.json => (stores important info about project/package)
//3 ways
//manually create package.json in root folder and then add bunch of properties
//npm init (step by step, press enter to skip)
//npm init -y (default settings)

const _ = require('lodash');

const items = [10, [20, [30, [40]]]];

const flattenItems = _.flattenDeep(items)

console.log(flattenItems)

