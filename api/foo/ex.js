const app = require("express")();

app.get("/ex", (req, res) => {
  res.end("express");
});

module.exports = app;
