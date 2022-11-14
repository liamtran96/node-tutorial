const http = require("http");

const server = http.createServer((req, res) => {
	if (req.url === "/") res.write("welcome to my home page");
	if (req.url === "/about") res.end("Here is our short history");
});

const port = 5000;

server.listen(port);
