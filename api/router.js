const express = require("express");

const router = express.Router(); // 路由实例，相当于一个 mini Express 实例

const user = require("./user");
const info = require("./info");

router.use("/user", user);
router.use("/info", info);

router.get("/", (req, res, next) => {
  res.send("api");
});

module.exports = router;
