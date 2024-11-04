/* EXPRESS JS*/
const express = require('express')

// Instantiating express app
const app = express()
const PORT = 5000   // Port number

/* 
    4 main methods in Express JS:-
    1. GET --> Read
    2. POST --> Create
    3. PUT --> Update
    4. DELETE --> Delete

    These 4 methods are used for CRUD operations.
*/

// GET method
/*
    Get method is used to send data from the Server (Database) to the Client.
*/

// Get method to get some data from the server
app.get('/users', (req,res) => {
    res.send("Hii All from the server");
})

// Display 'Hello World' on the homepage
app.get('/', (req,res) => {
    res.send("Hello World!");
})


// POST method
/* 
    Post method is used to send data from Client side to Server side to be stored in Database. So, we can not directly view
    the response for Post method on a web page (client).
    Install Thunder Client or Postman extension => to see the output
*/
app.post('/users', (req,res) => {
    res.send("Hi from Post method");
})

// PUT method
app.put('/users', (req,res) => {
    res.send("Hi from Put method");
})

// DELETE method
app.delete('/users', (req,res) => {
    res.send("Hi from Delete method");
})


app.listen(PORT, ()=>{
    console.log(`Your app is served on Port ${PORT}`);
})
