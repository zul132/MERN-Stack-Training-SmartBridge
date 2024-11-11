// For each collection we create a file
const mongoose = require('mongoose') 

// define the schema
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// create a model with the specified schema
const User = mongoose.model('users',userSchema);

module.exports = User