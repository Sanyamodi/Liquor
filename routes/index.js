const express = require('express');
const router = express.Router();
const isLoggedin = require("../middlewares/isLoggedin");

router.get("/",(req,res)=>{
    res.send("index");
})

router.get("/shop",isLoggedin,(req,res)=>{
    res.send("index's Shop");
})

module.exports = router;