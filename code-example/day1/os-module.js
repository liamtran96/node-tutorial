const os = require("os");

// info the current user
const user = os.userInfo();
console.log(user);

// method return system uptime

console.log(`The system uptime ${os.uptime()} seconds`);

const currentOS = {
	name: os.type(),
	release: os.release(),
	totalMem: os.totalmem(),
	freeMem: os.freemem(),
};

console.log(currentOS);
