const express = require("express");
const { validationResult } = require("express-validator");

const router = express.Router();

const auth_validator = require("../validators/user-validator");

router.post("/", auth_validator.generateValidator, async (req, res) => {
  try {
    const { email } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errorMessage: errors.array() });
    }
    const existingUser = await User.findOne({ email });
    if(existingUser){
        return res.status(400).json({ errorMessage: "Username exists!" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send();
  }
});

module.exports = router;
