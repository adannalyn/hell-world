const bcrypt = require('bcrypt');

const { validate, User } = require("../models/Users");

const signupController = async (req, res) => {
    try {
        const { error } = validate (req.body);
        if(error){
            return res.status(400).json({ message: error.details[0].message });
        }
        const user = await User.findOne({ email: req.body.email });
        if(user){
            return res.status(409).json({ message: "User with given email already exist!"});
        }
        const salt = await bcrypt.genSalt(Number(process.env.SALT));
        const hashPassword = await bcrypt.hash(req.body.password, salt);
        await new User({ ...req.body, password: hashPassword }).save();
        res.status(201).json({ message: "User created successfully!"});
    } catch (err) {
        res.status(500).json({ message: "Internal server Error"});
    }
}

const loginController = async(req, res) => {
    try {
        const { error } = validate (req.body);
        if (error){
            res.status(400).json({ message: error.details[0].message });
        }
        const user = await User.findOne({ email:req.body.email });
        if (!user){
            res.status(401).json({ message: "Invalid Email or Password" });
        }
        const validPassword = await bcrypt.compare(req.body.password, user.password);
        if (!validPassword) {
            return res.status(401).json({ message: "Invalid Email or Password" });
        }
        const token = user.generateAuthToken();
        res.status(200).json({ data: token, message: "Logged in successfully!"});
    } catch (error) {
        res.status(500).json({ message: "Internal server error"});
    }
}

module.exports = {
    signupController,
    loginController
}
