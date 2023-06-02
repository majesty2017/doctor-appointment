const express = require('express');
const { LoginController, RegisterController } = require('../controllers/UserController');
const AuthMiddleware = require('../middlewares/AuthMiddleware');

// router object initialized
const router = express.Router()

//routes
router.post('/login', LoginController)

router.post('/register', RegisterController)

router.post("/getUserData", AuthMiddleware);

module.exports = router

