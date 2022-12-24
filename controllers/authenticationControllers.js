const signupController = async (req, res) => {
    try {
        res.status(201).json({
            message: "success",
            data: "data",
        });
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