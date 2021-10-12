const app = require("express")();
const { v4 } = require("uuid");

app.get("/ex", (req, res) => {
  res.end("express");
});

module.exports = app;
