const User = require('../models/User');
const bcrypt = require('bcryptjs');

const RegisterController = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    if (existingUser) {
        return res.status(200).send({success: false, message: 'User already exists!'})
    }
    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    req.body.password = hashedPassword
    const user = new User(req.body)
    await user.save()
    res.status(201).send({success: true, message: 'Registered successfully!'})
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};

const LoginController = async (req, res) => {};

module.exports = { LoginController, RegisterController };
