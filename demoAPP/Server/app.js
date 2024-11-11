const express = require('express')  // import express
const mongoose = require('mongoose')    // import mongoose
const app = express()   // instantiate express app
const PORT = 5000   // Port number



app.listen(PORT, ()=>{
    console.log(`Your app is served on Port ${PORT}`);
})