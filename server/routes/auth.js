const bcrypt = require("bcryptjs");
const env = require("dotenv");
const express = require("express");
const jwt = require("jsonwebtoken");
const { validationResult } = require("express-validator");

const User = require("../models/user");

env.config();

const router = express.Router();

const auth_validator = require("../validators/user-validator");

/// SIGNUP ROUTE ///
router.post("/", auth_validator.generateValidator, async (req, res) => {
  try {
    const { email, password } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errorMessage: errors.array() });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ errorMessage: "Username exists!" });
    }

    // Hash password //
    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const user = new User({
      email,
      passwordHash,
    });
    const savedUser = await user.save();

    /// sign the token ///
    const token = jwt.sign(
      {
        user: savedUser._id,
      },
      process.env.JWT_SECRET
    );

    /// send a token in a HTTP-only cookie ///
    res
      .cookie("token", token, {
        httpOnly: true,
      })
      .send();
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
