const express = require("express");
const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const router = express.Router();

router.post("/sign-up", async (req, res) => {
  try {
    // Extract email and password from the req.body object
    const { email, password, confirmPassword, role } = req.body;
    
    // Check if the email is already in use
    let userExists = await User.findOne({ email });
 
    if (userExists) {
      res.status(401).json({ message: "Email is already in use." });
      return;
    }
 
    // Define salt rounds
    const saltRounds = 10;
 
    // Hash password
    bcrypt.hash(password, saltRounds, (err, hash) => {
      if (err) throw new Error("Internal Server Error");
 
      // Create a new user
      let user = new User({
        email,
        password: hash,
	confirmPassword: hash,
	role: role || "jobseeker"
      });
      const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "6d" });
      user.accessToken = accessToken;
 
      // Save user to database
      user.save().then(() => {
        res.json({ message: "User created successfully", data: user, accessToken });
      });
    });
  } catch (err) {
    return res.status(401).send(err.message);
  }
});

router.post("/sign-in", async (req, res) => {
  try {
    // Extract email and password from the req.body object
    const { email, password } = req.body;
 
    // Check if user exists in database
    let user = await User.findOne({ email });
 
    if (!user) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
 
    // Compare passwords
    bcrypt.compare(password, user.password, (err, result) => {
      if (result) {
        return res.status(200).json({ message: "User Logged in Successfully" });
      }
    const accessToken = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "6d" });
    let user = await User.findByIdAndUpdate(user._id, { accessToken });
    if(user)
    res.status(200).json({ data: { email: user.email, role: user.role }, accessToken })
      console.log(err);
      return res.status(401).json({ message: "Invalid Credentials" });
    
    });
  } catch (error) {
    res.status(401).send(err.message);
  }
});
 
module.exports = router;
