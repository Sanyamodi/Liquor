const jwt = require('jsonwebtoken');
require('dotenv').config();

const setToken = (user) => {
    return jwt.sign({email:user.email,id:user._id}, process.env.JWT_SECRET);
}

module.exports.setToken = setToken;