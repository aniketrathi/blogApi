const express = require("express");
const { validationResult } = require("express-validator");

const Blog = require("../models/blog");

const router = express.Router();

router.post("/", (req, res) => {
  try {
    const { title, description } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errorMessage: errors.array() });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
