const express = require("express");

const router = express.Router(); // 路由实例，相当于一个 mini Express 实例

// const user = require("./user");
const info = require("./info");

router.use("/user", require("./user")); // 不行
router.use("/info", info); // 不行
router.use("/article", require("./article"));

router.get("/", (req, res, next) => {
  res.send("api");
});

router.get("/test", (req, res, next) => {
  res.status(200).json([{ foo: "bar" }]);
});

module.exports = router;
