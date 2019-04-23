var mongoose = require("mongoose");
mongoose.connect(
  "mongodb:mongourl with credationals",
  { useNewUrlParser: true }
);

module.exports = mongoose;
