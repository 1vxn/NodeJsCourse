console.log("Starting file");

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

console.log("Results ",notes.add(9,-2));
/*var user = os.userInfo();
console.log(user);
fs.appendFile('Holo.txt',`Holo ${user.username} !`);
*/
