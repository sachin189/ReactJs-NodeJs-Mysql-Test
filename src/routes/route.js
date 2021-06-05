const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movie.controller');

router.get('/movies', MovieController.getAllMovies);

module.exports = router;