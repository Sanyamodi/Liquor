const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../models/user-model");

router.get("/", (req, res) => {
    res.send("hey from user");
});

router.post("/register", (req, res) => {
    try {
        let { fullname, email, password } = req.body;
        bcrypt.genSalt(11, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if(err) return res.send(err.message);
                else{
                    let user = await userModel.create({
                        fullname,
                        email,
                        password:hash,
                    });
                    let token = jwt.sign({email,id:user._id}, process.env.JWT_SECRET);
                    res.cookie("token",token);
                    res.send("ho gya create");
                }
            });
        });
    } catch (err) {
        res.send(err.message);
    }
});

module.exports = router;
