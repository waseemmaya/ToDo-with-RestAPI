const express = require("express");
const app = express();
const mongoose = require("./config/db");
var cors = require("cors");

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("=======> My Server is running on port 5000 <=======");
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const db = mongoose.connection;
db.once("open", () => {
  console.log("<===============Mongo DB running==============>");
});

app.use("/", require("./routes/index.js"));
