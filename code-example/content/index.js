// GLOBAL  - NO WINDOW

// __dirname - path to current directory
// __filename - filename
// required - function to use modules (Common JS)
// module - info about current module (file)
// process - info about env where the program is being excuted

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);

const http = require("http"); 
const { resolveSoa } = require("dns");
const server = http.createServer((req, res) => {
    res.write("welcome to server")
    res.end()
})

server.listen(5000)