const http = require('http');

http.createServer((req,res)=>{
    res.write("Hii all");
    res.end()
}).listen(5000, ()=>{
    console.log("Your server is running");
})