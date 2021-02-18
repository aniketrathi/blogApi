const { body } = require("express-validator");

exports.generateValidator = [
  body("description", "comment must not be empty.")
    .trim()
    .isLength({ min: 1, max: 100 })
    .escape(),
];
