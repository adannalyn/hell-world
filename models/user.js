const mongoose = require("mongoose");
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");

const PostSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String, required: true },
    confirmPassword : { type: String, required:true },
});

PostSchema.methods.generateAuthToken = function () {
    const token = jwt.sign ({ _id: this._id}, process.env.JWTPRIVATEKEY, { expiresIn: "7d" });
    return token
};
const User = mongoose.model("user", PostSchema);
const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required.label("aPassword123!"),
        confirmPassword: passwordComplexity().required.label("aPassword123!"),
    });
    return schema.validate(data)
};

module.exports = { User, validate };
