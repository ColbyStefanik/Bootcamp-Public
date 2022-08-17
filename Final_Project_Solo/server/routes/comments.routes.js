const commentsController = require("../controllers/comments.controller");

module.exports = (app) => {
    app.post("/comment", commentsController.createNewComment);
    app.delete("/comment/:id", commentsController.deleteExistingComment);
};