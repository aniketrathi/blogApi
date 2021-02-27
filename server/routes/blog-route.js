const express = require("express");
const { validationResult } = require("express-validator");

const auth = require("../middlewares/auth-middleware");
const Blog = require("../models/blog");
const blog_validator = require("../validators/blog-validator");
const Comment = require("../models/comment");
const comment_validator = require("../validators/comment-validator");

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

router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author");
    const comments = await Comment.find().populate("author");
    res.json({ blogs, comments });
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

router.post(
  "/:id/comment",
  auth.auth,
  comment_validator.generateValidator,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { description } = req.body;
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errorMessage: errors.array() });
      }

      const comment = await new Comment({
        blog: id,
        description,
        author: req.user,
      });
      const savedComment = await comment.save();
      res.json(savedComment);
    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  }
);

module.exports = router;
