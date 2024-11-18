const User = require('../model/user')


// GET method to fetch all the users
exports.getAllUsers = async (req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users) 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}


// POST method to create a new user
exports.createUser = async (req,res)=>{
    try {
        const user = new User(req.body);
        await user.save();

    } catch(error) {
        res.status(500).json({message:error.message})
    }
}