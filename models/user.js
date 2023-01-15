const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Joi = require('joi');

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

//const User = mongoose.model("user", userSchema);

const validate = (user) => {
    const schema = Joi.object({
        email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).lowercase().required(),
        password: Joi.string().min(3).max(15).required(),
	confirmPassword: Joi.any().valid(Joi.ref('password')).required().options({ language: { any: { allowOnly: 'must match password' } } }),
	role: Joi.string().default('admin').required()

    });

    return schema.validate(user);
};

module.exports = User = mongoose.model('user', userSchema)
