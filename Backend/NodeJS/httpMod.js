const http = require('http');
// import localMods
const greet = require('./localMods')

http.createServer((req,res)=>{
    var op = greet.greetings()
    res.write(op)
    res.end()
}).listen(5000, ()=>{
    console.log("Your server is running");
})