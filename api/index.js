const app = require("express")();

const router = require("./router/index.js");
const user = require("./user.js");
const info = require("./info.js");

app.use("/api", router);
app.use("/user", user);
app.use("/info", info);
app.use("/profile", require("./profile.js"));

app.get("/foo", (req, res, next) => {
  res.send("foo");
});
app.post("/foo", (req, res, next) => {
  res.send("POST foo");
});

module.exports = app;
