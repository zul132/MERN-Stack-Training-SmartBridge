// RESTful API Implementation
const express = require('express')  // import express
const app = express()   // instantiate express app
const PORT = 5000   // Port number

// Tell express to use the json middleware
app.use(express.json())

// Sample data
let users = [
    {id:1, name:"Shiva"}, 
    {id:2, name:"Ahmed"}, 
    {id:3, name:"Yohan"}
]

// GET method to retrieve all users data
app.get('/', (req, res) => {
    res.json(users);    // send users data in json format
})

// POST method to create a new user
app.post('/user', (req,res) => {
    // id is auto icremental
    const newUser = {
        id:users.length + 1,
        name:req.body.name
    }
    users.push(newUser);
    // 201 status code indicates new user is successfully create
    // send the new user in json format
    res.status(201).json(newUser);
})

// PUT method to update the existing user data
app.put('/user/:id', (req,res) => {
    // id passed to URL will be taken as string, so we need to parse it as an Integer
    const id = parseInt(req.params.id)
    const foundUser = users.find(user => user.id === id)
    if (!foundUser) {
        return res.status(404).json({message:'User not found'});
    }
    foundUser.name = req.body.name;
    res.json({message:'Updated successfully'});
})

// DELETE method to delete the existing user data
app.delete('/user/:id', (req,res) => {
    const id = parseInt(req.params.id)
    users = users.filter(user => user.id !== id)
    res.json({message:'User deleted successfully'});
})

app.listen(PORT, ()=>{
    console.log(`Your app is served on Port ${PORT}`);
})