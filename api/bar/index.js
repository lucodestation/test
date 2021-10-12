const app = require("express")();

app.get("/test", (req, res) => {
  res.end("test");
});

module.exports = app;
