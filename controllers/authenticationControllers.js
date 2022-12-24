const { validate, User } = require("../models/Users");

const signupController = async (req, res) => {
    try {
        const { error } = validate (req.body);
        if(error)
        return res.status(400).send({ message: error.details[0].message });
        const user = await User.findOne
    } catch (err) {
        console.log(err);
    }
}

const loginController = async(req, res) => {
    try {
        res.status(201).json({
            message: "logged in",
            data: "data"
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    signupController,
    loginController
}