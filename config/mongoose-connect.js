const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/Liquor")
  .then(function () {
    dbgr("connected to MongoDB");
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
