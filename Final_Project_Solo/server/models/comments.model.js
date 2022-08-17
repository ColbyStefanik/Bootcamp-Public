const mongoose = require("mongoose");
var ObjectId = require('mongodb').ObjectId;

const CommentsSchema = new mongoose.Schema( //Shame I didn't have time to implement this in the front end.
    {
        commentor: { 
            type : ObjectId, 
            ref: "User",
        },
        commentedSubmission: { 
            type : ObjectId, 
            ref: "submission",
        },
        commentText: {
            type: String,
            required: [true, "A comment is required"],
        },
    },
{ timestamps: true }
);

module.exports = mongoose.model("Comment", CommentsSchema);