const express = require("express");

const router = express.Router(); // 路由实例，相当于一个 mini Express 实例

// const user = require("./user");
const info = require("./info");

router.use("/user", require("./user")); // 不行
router.use("/info", info); // 不行

router.get("/", (req, res, next) => {
  res.send("api");
});

module.exports = router;
