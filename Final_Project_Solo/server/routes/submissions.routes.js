const submissionController = require("../controllers/submissions.controller");

module.exports = (app) => {
    app.post("/submit", submissionController.createNewSubmission);
    app.get("/submission/:id", submissionController.getOneSubmission);
    app.get("/submission/:id/comments", submissionController.getSubmissionComments);
    app.put("/submission/:id/promote", submissionController.userPromoteSubmission);
    app.get("/submissions/:type", submissionController.searchSubmissions);
    app.get("/submissions/:type/:tag", submissionController.searchSubmissionsWithTag);
    app.put("/submission/:id", submissionController.updateSubmission);
    app.delete("/submission/:id", submissionController.deleteExistingSubmission);
};