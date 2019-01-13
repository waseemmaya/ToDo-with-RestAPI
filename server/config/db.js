var mongoose = require("mongoose");
mongoose.connect(
  "mongodb://admin:admin123@ds063546.mlab.com:63546/tododb",
  { useNewUrlParser: true }
);

module.exports = mongoose;
