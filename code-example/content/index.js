const http = require("http");


const port = 5000;

console.log(path.sep);

const filePath = path.join("/content/", "subfolder", "test.txt");

console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "test.txt");

console.log(absolute);

const http = require("http"); 

const server = http.createServer((req, res) => {
    res.write("welcome to server")
    res.end()
})

server.listen(5000)
