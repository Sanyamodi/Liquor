require('dotenv').config()
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const { connection } = require('mongoose');
const db = require("./config/mongoose-connect");
const userRouter = require("./routes/userRouter");
const ownerRouter = require("./routes/ownerRouter");
const productRouter = require("./routes/productRouter");

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/owner",ownerRouter);
app.use("/user",userRouter);
app.use("/product",productRouter);

app.get('/',(req,res) => {
    res.send('hello')
})

app.listen(process.env.PORT || 3000);