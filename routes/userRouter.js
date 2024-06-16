const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userModel = require("../models/user-model");


router.get("/", (req, res) => {
    res.send("hey from user");
});

router.post('/register',(req,res)=>{
    const {fullname,email,password} = req.body;
    bcrypt.genSalt(11, function(err, salt) {
        bcrypt.hash(password, salt,async function(err, hash) {
            let user = await userModel.create({
                fullname,
                email,
                password:hash
            })
            var token = jwt.sign({email:email,userId:user._id} ,"xfghcvjbk");
            res.cookie("token",token)
            res.send("ban gya ....")
        });
    });
})


router.post('/login',async (req,res)=>{
    const {email,password} = req.body;
    let user = await userModel.findOne({email});
    if(!user)   return res.send("invalid username or password")
    
    bcrypt.compare(password, user.password, function(err, result) {
        if(result){
            let token = jwt.sign({email:email,userId:user._id} ,"xfghcvjbk");
            res.cookie("token",token)
            res.send("ho gya login");
        }else{
            res.send("invalid username or password")
        }
    });
})

router.get('/logout',(req,res)=>{
    res.clearCookie("token")
    res.send("logout ho gya")
})


const isLogin = (req, res, next) => {
    const token = req.cookie;
    console.log(token)
    if (!token) {
        return res.send("login first")
    }else{
        const decoded = jwt.verify(token, 'xfghcvjbk');
        next();
    }
};

router.get('/profile',isLogin,(req,res,next)=>{
    res.send("profile page")
})

module.exports = router;
