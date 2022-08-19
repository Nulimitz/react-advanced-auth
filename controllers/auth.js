const User = require("../models/User");

exports.register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.create({
      username,
      email,
      password,
    });
    res.status(201).json({
      success: true,
      user,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

exports.login = async (req, res, next) => {
  res.send("Login route");
};

exports.forgotpassword = async (req, res, next) => {
  res.send("Forgot password route");
};

exports.resetpassword = async (req, res, next) => {
  res.send("Reset password route");
};
