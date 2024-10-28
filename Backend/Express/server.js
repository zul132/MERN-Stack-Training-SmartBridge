/* EXPRESS JS*/
const express = require('express')

// Instantiating express app
const app = express()
const PORT = 5000   // Port number

app.listen(PORT, ()=>{
    console.log(`Your app is served on Port ${PORT}`);
})
