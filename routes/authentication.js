const express = require('express');
const controllers = require('../controllers/authenticationControllers')

const router = express.Router();
const { User } = require('../models/user');
const Joi = require('joi');
const passwordComplexity = require('joi-password-complexity').default;


router.post('/signup', controllers.signupController);

router.post('/login', controllers.loginController);

const validate = (data) => {
    const schema = Joi.object({
        email: Joi.string().email().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = router;
