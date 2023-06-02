const express = require('express');
const { LoginController, RegisterController } = require('../controllers/UserController');

// router object initialized
const router = express.Router()

//routes
router.post('/login', LoginController)

router.post('/register', RegisterController)

module.exports = router

