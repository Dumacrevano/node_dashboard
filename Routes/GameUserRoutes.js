const express = require('express')
const gameuserController = require('../Controllers/GamesUserController')
const { signup, login } = gameuserController
const userAuth = require('../Middleware/userAuth')

const router = express.Router()

//signup endpoint
//passing the middleware function to the signup
router.post('/register', userAuth.saveUser, signup);

//login route
router.post('/login', login );

module.exports = router;