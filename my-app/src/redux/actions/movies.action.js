import { moviesConstent } from '../constants/movies.types'
import { api } from '../../api/api'
import { API_URL } from '../../config'

const getAllMovies =  () => async dispatch => { 
    
    const response = await api.get(`${API_URL}/v1/movies`).catch(err=>{ console.log(response) })
    if(response.status == 200)
    {
        dispatch(success(response.data))
    }
    function success(movies) { return { type: moviesConstent.GET_ALL_MOVIES, movies } }
}

const getMovieDetails =  (movieId) => async dispatch => { 
    
    const response = await api.get(`${API_URL}/v1/movies/id/${movieId}`).catch(err=>{ console.log(response) })
    if(response.status == 200)
    {
        dispatch(success(response.data))
    }
    function success(movie) { return { type: moviesConstent.MOVIE_DETAILS, movie } }
}

export const moviesActions = {
    getAllMovies,
    getMovieDetails
}

