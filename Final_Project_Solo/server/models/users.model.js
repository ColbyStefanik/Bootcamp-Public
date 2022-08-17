const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId;

const UsersSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, "Email is required"],
            minLength: [3, "Email must be at least 3 characters"],
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minLength: [3, "Password must be at least 3 characters"],
        },
        passwordConfirm: {
            type: String,
            required: [true, "Confirmation is required"],
        },
        userName: {
            type: String,
            required: [true, "A user name is required"],
            minLength: [3, "Your user name must be at least 3 characters"],
        },
        title: String,
        birthday: String,
        gender: String,
        bio: String,
        followers: [{ 
            type : ObjectId, 
            ref: "User",
        }],
        following: [{ 
            type : ObjectId, 
            ref: "User",
        }],
        promotes: [{ 
            type : ObjectId, 
            ref: "Submission",
        }],
        submissions: [{ 
            type : ObjectId, 
            ref: "Submission",
        }],
    },
{ timestamps: true }
);

module.exports = mongoose.model("User", UsersSchema);