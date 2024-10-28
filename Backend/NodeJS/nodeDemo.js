// GLOBALS
// console.log(__dirname)
// console.log(__filename)

/*
    CORE NODE MODULES (inbuilt modules)
    1. os
    2. http
    3. fs (file system)
    4. events
*/

const os = require('os');

console.log(os.arch());
console.log(os.cpus());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.networkInterfaces());