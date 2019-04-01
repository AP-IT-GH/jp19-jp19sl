const io = require("socket.io-client");
const rpio = require("rpio");
let socket = io('http://192.168.3.1:3000', { reconnect: true });
let gpioLockerMap = new Map();
gpioLockerMap.set("5c891c17d7fd701ca433173a", 3);
socket.on("connect", () => {
	console.log("Successfully connected!");
});
gpioLockerMap.forEach((gpio) => rpio.open(gpio, rpio.OUTPUT, rpio.LOW));

socket.on("changeData", (changedData) => {
	console.log();
	if (changedData.updateDescription.updatedFields.open == false)
		rpio.write(gpioLockerMap.get(changedData.documentKey._id), rpio.LOW);
	if (changedData.updateDescription.updatedFields.open == true)
		rpio.write(gpioLockerMap.get(changedData.documentKey._id), rpio.HIGH);
});
