const User = require('../models/User');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken')

const RegisterController = async (req, res) => {
  try {
    const existingUser = await User.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res
        .status(200)
        .send({ success: false, message: 'User already exists!' });
    }
    const password = req.body.password;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    const user = new User(req.body);
    await user.save();
    res
      .status(201)
      .send({ success: true, message: 'Registered successfully!' });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};

const LoginController = async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email})
    if (!user) {
        return res
          .status(200)
          .send({ success: false, message: 'User does\'nt exists!' });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) {
        return res
          .status(200)
          .send({ success: false, message: "Invalid email or password!" });
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.status(200).send({
      success: true,
      token,
      message: 'Logged in successfully'
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: error });
  }
};

module.exports = { LoginController, RegisterController };
