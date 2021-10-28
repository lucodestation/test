const express = require("express");

const router = express.Router();

import { jsonData } from "../foo.js";

router.get("/", (req, res, next) => {
  res.send("user");
});
router.get("/info", (req, res, next) => {
  res.status(200).json(jsonData);
});

module.exports = router;
