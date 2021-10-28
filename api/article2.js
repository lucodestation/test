const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("article2");
});

module.exports = router;
