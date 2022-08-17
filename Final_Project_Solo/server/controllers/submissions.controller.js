const Submission = require('../models/submissions.model');
const User = require('../models/users.model');
const Comment = require('../models/comments.model');

const createNewSubmission = (req, res) => {
    Submission.create(req.body)
    .then((newSubmission) => {
        addNewSubmissionToUser(newSubmission, req),
        res.json({newSubmission})
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const addNewSubmissionToUser = (newSubmission, req) => {
    User.findOneAndUpdate(
        { _id: req.body.creator },
        { $addToSet: { submissions: newSubmission.id } },
    )
    .then((UpdatedUser) => {
        //Keep empty. I have no idea why, but this function doesn't work without .then present but creates errors if I try to do anything with it.
    });
};

const getOneSubmission = (req, res) => {
    Submission.findOne({ _id: req.params.id })
    .populate('creator')
    .then((queriedSubmission) => {
        res.json(queriedSubmission);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getSubmissionComments = (req, res) => {
    Comment.find({ commentedSubmission: req.params.id })
    .populate('commentor')
    .then((SubmissionComments) => {
        res.json(SubmissionComments);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const userPromoteSubmission = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.body.id },
        { $addToSet: { promotes: req.params.id } }
    )
    .then((queriedUser) => {
        res.json(queriedUser);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const searchSubmissions = (req, res) => {
    Submission.find({ submissionType: req.params.type })
    .then((queriedSubmissions) => {
        res.json(queriedSubmissions);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const searchSubmissionsWithTag = (req, res) => {
    Submission.find({ 
        $and:[
            { submissionType: req.params.type },
            { tags: req.params.tag }
        ]})
    .then((queriedSubmissions) => {
        res.json(queriedSubmissions);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};


const updateSubmission = (req, res) => {
    Submission.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedSubmission) => {
        res.json({ updatedSubmission });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const deleteExistingSubmission = (req, res) => {
    Submission.deleteOne({ _id: req.params.id })
    .catch((err) => {
        res.status(400).json({ err });
    })
    User.updateMany({}, { // Delete submission from submissions and promotes arrays
        $pullAll: { 
            promotes: [{_id: req.params.id}],
            submissions: [{_id: req.params.id}]
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
    createNewSubmission,
    getOneSubmission,
    getSubmissionComments,
    userPromoteSubmission,
    searchSubmissions,
    searchSubmissionsWithTag,
    updateSubmission,
    deleteExistingSubmission
};