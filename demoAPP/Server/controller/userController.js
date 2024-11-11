const User = require('../model/user')

exports.getAllUsers = async (req,res)=>{
    try {
        const users = await User.find()
        res.status(200).json(users) 
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}