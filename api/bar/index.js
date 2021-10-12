const app = require("express")();

app.get("/bar", (req, res) => {
  res.end("bar");
});

module.exports = app;
