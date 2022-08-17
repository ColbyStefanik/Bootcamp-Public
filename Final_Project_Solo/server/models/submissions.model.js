const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId;

const SubmissionsSchema = new mongoose.Schema(
    {
        submissionType: {
            type: String,
            enum: 
            {
                values: ['Artwork','Photos','Animation'],
                message: 'You must pick a type of submission before you can submit'
            }
        },
        creator: { 
            type : ObjectId, 
            ref: "User",
        },
        title: {
            type: String,
            required: [true, "A title is required"],
        },
        description: String,
        tags: [{
            type: String
        }],
        comments: [{ 
            type : ObjectId, 
            ref: "Comment",
        }],
    },
{ timestamps: true }
);

module.exports = mongoose.model("Submission", SubmissionsSchema);