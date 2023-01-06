const mongoose = require("mongoose");
const { isEmail } = require("validator");

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: {
      validator: isEmail,
      message: (props) => `${props.value} is not a valid email`,
    },
  },

  password: {
    type: String,
    required: [true, "Password is required"],
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: () => "Password must be at least six characters long",
    },
  },

  confirmPassword: {
    type: String,
    required: [true, "Confirm Password is required"],
    validate: {
      validator: function (value) {
        return value.length >= 6;
      },
      message: () => "Confirm Password must be at least six characters long",
    },
  },

  role: {
    type: String,
    default: "jobSeeker",
    enum: [ "admin", "jobSeeker", "employer"],
    required: true,
    },
});

module.exports = mongoose.model("User", userSchema);
