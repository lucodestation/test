const app = require("express")();

const router = require("./router");
const user = require("./user");
const info = require("./info");

app.use("/api", router);
router.use("/user", user);
router.use("/info", info);

app.get("/foo", (req, res, next) => {
  res.send("foo");
});
app.post("/foo", (req, res, next) => {
  res.send("POST foo");
});

module.exports = app;
