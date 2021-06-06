const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movie.controller');

router.get('/movies', MovieController.getAllMovies);
router.get('/movies/id/:id', MovieController.getMoviesByID);

module.exports = router;