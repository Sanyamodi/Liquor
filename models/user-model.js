const { required } = require('joi');
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    fullname:{
        type: String,
        trim: true,
        minLength: 3,
        maxLength: 20,
        required: true,
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    cart:{
        type:Array,
        default:[]
    },
    order:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String
})

module.exports = mongoose.model("user",userSchema);