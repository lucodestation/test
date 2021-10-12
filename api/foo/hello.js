module.exports = (req, res) => {
  res.status(200).send(req.method + " <h1>Hello World</h1>");
};
