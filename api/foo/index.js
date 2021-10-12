const app = require("express")();

app.get("/ex", (req, res) => {
  res.status(200).send("express");
});

module.exports = app;
