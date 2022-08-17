const User = require('../models/users.model');

const createNewUser = (req, res) => {
    User.create(req.body)
    .then((newUser) => {
        res.json({ newUser });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getOneUser = (req, res) => {
    User.findOne({ _id: req.params.id })
    .populate('followers')
    .populate('following')
    .populate('promotes')
    .populate('submissions')
    .then((queriedUser) => {
        res.json(queriedUser);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const updateUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, {
        new: true,
        runValidators: true,
    })
    .then((updatedUser) => {
        res.json({ updatedUser });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const deleteExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
    .catch((err) => {
        res.status(400).json({ err });
    })
    User.updateMany({}, { // Delete user from followers and following arrays
        $pullAll: { 
            followers: [{_id: req.params.id}],
            following: [{_id: req.params.id}]
        }
    })
    .then((deletedResponse) => {
        res.json({ deletedResponse });
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const UserFollowOtherUser = (req, res) => {
    User.findOneAndUpdate(
        { _id: req.params.id },
        { $addToSet: { followers: req.body.id } }
    )
    .then((updatedFollowee) => {
        res.json(updatedFollowee);
    })
    .catch((err) => {
        res.status(400).json({ err });
    })
    User.findOneAndUpdate(
        { _id: req.body.id },
        { $addToSet: { following: req.params.id } }
    )
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getAllUserFollowers = (req, res) => {
    User.find({ followers: [] })
    .then((allUserFollowing) => {
        res.json(allUserFollowing);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

const getAllUserFollowing = (req, res) => {
    User.find({ following: [] })
    .then((allUserFollowing) => {
        res.json(allUserFollowing);
    })
    .catch((err) => {
        res.status(400).json({ err });
    });
};

module.exports = {
    createNewUser,
    getOneUser,
    updateUser,
    deleteExistingUser,
    UserFollowOtherUser,
    getAllUserFollowers,
    getAllUserFollowing
};