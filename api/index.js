const app = require("express")();

app.get("/api", (req, res) => {
  res.end("api");
});

module.exports = app;
