const mongoose = require('mongoose');   

const UserSchema = mongoose.Schema({})

const User = mongoose.model('users', UserSchema)

module.exports = User