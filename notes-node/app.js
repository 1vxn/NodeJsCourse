console.log("Starting file");

const fs = require('fs');
const os = require('os');

var user = os.userInfo();
console.log(user);
fs.appendFile('Holo.txt',`Holo ${user.username} !`);
