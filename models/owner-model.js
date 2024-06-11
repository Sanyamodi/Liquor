const { required } = require('joi');
const mongoose = require('mongoose');

const ownerSchema = mongoose.Schema({
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
    product:{
        type:Array,
        default:[]
    },
    contact:Number,
    picture:String,
    gstin:Number
})

module.exports = mongoose.model("owner",ownerSchema);