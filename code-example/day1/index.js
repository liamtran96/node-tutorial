// GLOBAL  - NO WINDOW

// __dirname - path to current directory
// __filename - filename
// required - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being excuted

const names = require("./1-name");
const sayHiFunc = require("./2-ultils");
console.log(names);
console.log(sayHiFunc);

sayHiFunc(names.name2);

// console.log(__dirname);
