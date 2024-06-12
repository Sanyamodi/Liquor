const mongoose = require("mongoose");
const dbgr = require("debug")("development:mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(function () {
    dbgr("connected to MongoDB");
    // $env:DEBUG="development:*" (ye likh ke check karege...)
  })
  .catch(function (err) {
    dbgr(err);
  });

module.exports = mongoose.connection;
