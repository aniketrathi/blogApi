const { body } = require("express-validator");

exports.generateValidator = [
  body("title", "title must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  body("description", "description must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
];
