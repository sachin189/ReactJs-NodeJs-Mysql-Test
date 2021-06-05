const MovieModel = require('../models/movie.model');
class MenuController {

    getAllMovies = async (req, res, next) => {
        
        let userList = await MovieModel.find();
        if (!userList.length) {
            throw new HttpException(404, 'Users not found');
        }

        userList = userList.map(user => {
            const { password, ...userWithoutPassword } = user;
            return userWithoutPassword;
        });

        res.send(userList);
    };
}

module.exports = new MenuController;