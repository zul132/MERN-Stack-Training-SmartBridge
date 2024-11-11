const express = require('express')  // import express
const mongoose = require('mongoose')    // import mongoose
const userRouter = require('./route/userRoutes')

const app = express()   // instantiate express app
const PORT = 5000   // Port number

mongoose.connect('mongodb://localhost:27017/nmdb')
.then(()=>{
    console.log('Connection established');
}).catch((err)=>{
    console.log('Error connecting to the DB' + err.message);
})

// Middleware
app.use(express.json())
app.use(userRouter)


app.listen(PORT, ()=>{
    console.log(`Your app is served on Port ${PORT}`);
})