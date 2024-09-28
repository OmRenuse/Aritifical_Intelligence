const express = require('express')
const { resgisterController, loginController, logoutController } = require('../controllers/authController')

//router object
const router = express.Router()

//routes
//REGISTER
router.post('/register', resgisterController);

//LOGIN
router.post('/login', loginController);

//LOGOUT
router.post('/logout', logoutController);


module.exports = router