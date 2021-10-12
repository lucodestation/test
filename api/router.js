const express = require("express");

const router = express.Router(); // 路由实例，相当于一个 mini Express 实例

// /api
router.get("/", (req, res, next) => {
  res.send("get /api");
});

// /api/foo
router.get("/foo", (req, res, next) => {
  res.send("get /api/foo");
});

module.exports = router;
