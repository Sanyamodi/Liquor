const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../models/user-model");
const { setToken } = require("../utils/setToken");
const {registerUser,loginUser} = require("../controlers/authControler");


router.get("/", (req, res) => {
    res.send("hey from user");
});

router.post("/register",registerUser);

router.post("/login",loginUser);

module.exports = router;
