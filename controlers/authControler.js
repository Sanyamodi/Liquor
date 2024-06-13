const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { setToken } = require("../utils/setToken");
const userModel = require("../models/user-model");

module.exports.registerUser = async (req, res)=>{
    try {
        let { fullname, email, password } = req.body;
        let user = await userModel.findOne({email:email});
        if(user)   return res.status(201).send("email is already register...")
        bcrypt.genSalt(11, function (err, salt) {
            bcrypt.hash(password, salt, async function (err, hash) {
                if(err) return res.send(err.message);
                else{
                    let user = await userModel.create({
                        fullname,
                        email,
                        password:hash,
                    });
                    let token = setToken(user);
                    res.cookie("token",token);
                    res.send("ho gya user create");
                }
            });
        });
    } catch (err) {
        res.send(err.message);
    }
};

module.exports.loginUser = async (req,res) => {
    let {email,password} = req.body;
    let user = await userModel.findOne({email:email});
    if(!user) return res.status(404).send("invalid email or password");
    bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
            let token = setToken(user);
            res.cookie("token",token);
            res.send("login successfully")
        }
        else {
            return res.send("invalid email or password")}
    });
}