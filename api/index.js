const app = require("express")();

const router = require("./router");
const user = require("./user");
const info = require("./info");

app.use("/api", router);

app.get("/foo", (req, res, next) => {
  res.send("foo");
});

router.use("/user", user);
router.use("/info", info);

module.exports = app;
