import { moviesConstent } from "../constants/movies.types";

export const movies = ( state = {moviesList:[]}, action ) => {
    switch (action.type) {
        case moviesConstent.GET_ALL_MOVIES:
            console.log(action);
            return { moviesList: action.movies };
        default:
        return state;
    }
};

export const movieDetails = ( state = {}, action ) => {
    console.log(action);
    switch (action.type) {
        case moviesConstent.MOVIE_DETAILS:
            return { item:action.movie };
        case moviesConstent.REMOVE_MOVIE_DETAILS:
            return {item:{}};
        default:
        return state;
    }
};