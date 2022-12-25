const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const PostSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String },
    confirmPassword : { type: String },
});

PostSchema.methods.generateAuthToken = function () {

      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "5h",
        }
      );
      user.token = token;
      res.status(201).json(user);
};

const User = mongoose.model("user", PostSchema);
const validate = (data) => {
    const schema = Joi.object({
        confirmPassword: Joi.string().required(),
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().validate("aPassword123!"),
    });
    return schema.validate(data);
}
module.exports = { User, validate };
