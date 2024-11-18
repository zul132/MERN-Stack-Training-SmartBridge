const express = require('express')
const router = express.Router()
const UserController = require('../controller/userController')

router.get('/users', UserController.getAllUsers)
router.post('/users', UserController.createUser)
router.put('/users/:id', UserController.updateUser)
router.delete('/users/:id', UserController.deleteUser)
router.get('/users/:id', UserController.getUserById)


module.exports = router