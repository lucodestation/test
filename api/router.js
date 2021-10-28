const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("router");
});

router.use("/info2", require("./info2.js"));

module.exports = router;
