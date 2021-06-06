import { moviesConstent } from "../constants/movies.types";

export const movies = (state = {moviesList:[],movieDetails:{}}, action) => {
    
    switch (action.type) {
        case moviesConstent.GET_ALL_MOVIES:
            return { moviesList: action.movies };
        case moviesConstent.MOVIE_DETAILS:
            return { movieDetails: action.movie }; 
        default:
        return state;
    }
}

/*export const movies = ( state = intialState, action ) => {
    switch (action.type) {
        case moviesConstent.GET_ALL_MOVIES:
            console.log(action);
            return { movies: action.movies };
        default:
        return state;
    }
};

export const movieDetails = ( state = intialState, action ) => {
    switch (action.type) {
        case moviesConstent.MOVIE_DETAILS:
            return {  movieDetails: action.movie };
        default:
        return state;
    }
};*/