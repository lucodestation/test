const app = require("express")();

const router = require("./router");

app.get("/foo", (req, res, next) => {
  res.send("foo");
});

router.use("/user", require("./user"));
router.use("/info", require("./info"));

module.exports = app;
