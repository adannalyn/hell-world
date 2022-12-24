const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        default: "Basic",
        required: true
    },
    date: {
        type: Date,
        default:Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);