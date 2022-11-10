const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./subfolder/first.txt", "utf8");
console.log(first);
const second = readFileSync("./subfolder/second.txt", "utf8");
console.log(second);

writeFileSync(
	"./subfolder/result.txt",
	`Here is the result ${first} and ${second}`,
	{
		flag: "a",
	}
);

//fs.writeFileSync(file, data[, options])

//options <Object> | <string>
// encoding <string> | <null> Default: 'utf8'
// mode <integer> Default: 0o666
// flag <string> See support of file system flags. Default: 'w'.
