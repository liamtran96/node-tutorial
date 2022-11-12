const { readFile, writeFile } = require("fs");

readFile("./subfolder/first.txt", "utf8", (err, data) => {
	if (err) console.log(err);
	console.log(data);
	const first = data;
	readFile("./subfolder/second.txt", "utf8", (err, data) => {
		if (err) console.log(err);
		console.log(data);
		const second = data;
		writeFile(
			"./subfolder/result3.txt",
			`Here is the result ${first} and ${second}`,
			(err, data) => {
				if (err) console.log(err);
				console.log(data);
			}
		);
	});
});
