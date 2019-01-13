const express = require("express");
const router = express.Router();

router.use("/", require("./tasks"));

module.exports = router;
