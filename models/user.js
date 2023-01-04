const Mongoose = require("mongoose");

const UserSchema = new Mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 6,
    required: true,
  },
  confirmPassword: {
    type: String,
    minlength: 6,
    required: true,
  },
  role: {
    type: String,
    default: "JobSeeker",
    required: true,
    enum: ["jobseeker", "employer", "admin"]
  },
});

const User = Mongoose.model("user", UserSchema);

module.exports = User;
