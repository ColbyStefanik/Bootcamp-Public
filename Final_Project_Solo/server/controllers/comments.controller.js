const Comment = require('../models/comments.model');
const Submission = require('../models/submissions.model');

const createNewComment = (req, res) => {
    Comment.create(req.body)
    .then((newComment) => {
        addNewCommentToSubmission(newComment, req),
        res.json({newComment})
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const addNewCommentToSubmission = (newComment, req) => {
    Submission.findOneAndUpdate(
        { _id: req.body.commentedSubmission },
        { $addToSet: { comments: newComment.id } },
    )
    .then((UpdatedSubmission) => {
        //Keep empty. I have no idea why, but this function doesn't work without .then present but creates errors if I try to do anything with it.
    });
};

const deleteExistingComment = (req, res) => {
    Comment.deleteOne({ _id: req.params.id })
    .catch((err) => {
        res.status(400).json({ err });
    })
    Submission.updateMany({}, { // Delete Comment from the Submission's comments array
        $pullAll: { 
            comments: [{_id: req.params.id}],
        }
    })
    .then((deletedResponse) => {
        res.json({ deletedResponse });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

module.exports = {
    createNewComment,
    deleteExistingComment
};