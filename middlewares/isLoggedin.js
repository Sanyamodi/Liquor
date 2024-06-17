const jwt = require('jsonwebtoken');
const userModel = require('../models/user-model');


module.exports = async (req,res,next)=>{
    if(!req.cookies.token){
        req.flash("error","You need to login first");
        return res.redirect('/login');
    }
    try {
        const decode = jwt.verify(req.cookies.token, process.env.JWT_SECRET);
        let user = await userModel.findOne({email:decode.email}).select("-password");
        req.user = user;
        next();
    } catch (err) {
        req.flash("error","Something went wrong...")
        res.redirect("/")
    }
}