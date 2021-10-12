const app = require("express")();

const router = require("./router");

app.use("/api", router);

module.exports = app;
