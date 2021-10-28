const express = require("express");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("router");
});

// require 引用的必须是当前路径下的资源，不能是上级目录下的资源
router.use("/user", require("./user"));

module.exports = router;
