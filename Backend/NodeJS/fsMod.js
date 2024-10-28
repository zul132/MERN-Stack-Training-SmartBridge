const fs = require('fs')

/*
    1. fs.open()
    2. fs.writeFile()
    3. fs.appendFile()
*/

// Create the demo file in write mode
fs.writeFile('demo.txt', 'Hi this a write file', ()=>{
    console.log("Written into the file");
})

// Append file mode
fs.appendFile('demo.txt', '\nHi this an appended file', ()=>{
    console.log("Appended into the file");
})

// Rename the file
fs.rename('demo.txt', 'new.txt', ()=>{
    console.log("Renamed the file");
})

// Delete the file
fs.unlink('new.txt', ()=>{
    console.log("Deleted the file");
})