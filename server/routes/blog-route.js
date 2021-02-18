const express = require("express");
const { validationResult } = require("express-validator");

const auth = require("../middlewares/auth-middleware");
const Blog = require("../models/blog");
const blog_validator = require("../validators/blog-validator");

const router = express.Router();

router.post(
  "/",
  auth.auth,
  blog_validator.generateValidator,
  async (req, res) => {
    try {
      const { title, description } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errorMessage: errors.array() });
      }

      const blog = await new Blog({
        title,
        description,
        author: req.user,
      });
      const savedBlog = await blog.save();
      res.json(savedBlog);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  }
);

module.exports = router;
