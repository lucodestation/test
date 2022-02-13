const app = require("express")();

const router = require("./router");

app.use("/api", router);

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World!')
})

app.get("/foo", (req, res, next) => {
  res.send("foo");
});
app.post("/foo", (req, res, next) => {
  res.send("POST foo");
});

module.exports = app;
