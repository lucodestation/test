module.exports = (req, res) => {
  if (req.method === "POST") {
    res.status(200).send("post: <h1>Hello World</h1>");
  }
  res.status(200).send("<h1>Hello World</h1>");
};
