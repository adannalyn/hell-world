const express = require('express');
const controllers = require('../controllers/authenticationControllers')

const router = express.Router();
const { User } = require('../models/Users');
const Joi = require('joi');

router.post('/signup', controllers.signupController);
router.post('/login', controllers.loginController);

const validate = (data) => {
    const schema = Joi.object({
        firstName: Joi.string().required().label("First Name"),
        lastName: Joi.string().required().label("Last Name"),
        email: Joi.string().email().required().label("Email"),
        password: Joi.passwordComplexity().required().label("Password"),
    });
    return schema.validate(data);
}

module.exports = router;