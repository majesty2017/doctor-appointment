const express = require('express');
const { login, register, auth } = require('../controllers/UserController');
const middleware = require('../middlewares/middleware');

// router object initialized
const router = express.Router()

//create routes
router.post('/login', login)

router.post('/register', register)

router.post("/get-user", middleware, auth);

module.exports = router

