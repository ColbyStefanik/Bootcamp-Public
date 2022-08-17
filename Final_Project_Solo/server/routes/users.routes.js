const userController = require("../controllers/users.controller");

module.exports = (app) => {
    app.post("/user", userController.createNewUser);
    app.get("/user/:id", userController.getOneUser);
    app.put("/user/:id", userController.updateUser);
    app.delete("/user/:id", userController.deleteExistingUser);
    app.put("/user/:id/follow", userController.UserFollowOtherUser);
    app.get("/user/:id/followers", userController.getAllUserFollowers);
    app.get("/user/:id/following", userController.getAllUserFollowing);
};