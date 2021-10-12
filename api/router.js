const express = require("express");

const router = express.Router(); // 路由实例，相当于一个 mini Express 实例

const user = require("./user");
const info = require("./info");

app.use("/user", user);
app.use("/info", info);

module.exports = router;
