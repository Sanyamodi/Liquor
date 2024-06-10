const { name } = require("ejs");
const { types, required } = require("joi");
const { default: mongoose } = require("mongoose");

const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    product:{
        type:String,
        required:true
    },
    image:{
        type:String,
        require:true,
        default:""
    },
    name:{
        type:String,
        required:true,
        default:"Product..."
    },
    price:Number,
    discount:{
        type:Number,
        default:0
    },
    bgcolor:{
        type:String,
        default:"#ffff"
    },
    panelcolor:String,
    textcolor:String,
})

module.exports = mongoose.Schema('product',productSchema)