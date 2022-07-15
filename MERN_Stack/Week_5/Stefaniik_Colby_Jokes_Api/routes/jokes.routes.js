const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:id', JokesController.findJokeById);
    app.put('/api/jokes/:id', JokesController.createNewJoke);
    app.post('/api/jokes', JokesController.updateExistingJoke);
    app.delete('/api/jokes/:id', JokesController.deleteExistingJoke);
}
