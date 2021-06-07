const MovieModel = require('../models/movie.model');
class MenuController {

    getAllMovies = async (req, res, next) => {
        
        let MoviesList = await MovieModel.find();
        if (!MoviesList.length) {
            throw new HttpException(404, 'Users not found');
        }
        res.send(MoviesList);
    };

    getMoviesByID = async (req, res, next) => {
        console.log(req)  
        let movie = await MovieModel.findOne({ id: req.params.id });
        
        if (!movie) {
            throw new HttpException(404, 'User not found');
        }
        res.send(movie);
    };
}

module.exports = new MenuController;