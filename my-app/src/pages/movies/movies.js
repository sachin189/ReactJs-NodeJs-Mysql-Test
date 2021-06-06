import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import './movies.css';

import { moviesActions } from '../../redux/actions/movies.action'

const Movies = (props) =>{

    const moviesList  = useSelector( state => state.movies.moviesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies());
    }, []);

    const movieLists = moviesList.map( movie => {
        return (
                <div className="col-md-2 card" key={movie.id}>
                    <img src={movie.posterurl} className="card-img-top poster" alt={movie.title} />
                    <div className="card-body">
                        <Link to={`movie/${movie.id}`}>{movie.title}</Link>
                    </div>
                </div>
            )
        })

    
    return ( 
            <div className="movie-list">
                <div className="row d-flex justify-content-center">
                    {movieLists}
                </div>
            </div>
    )
}

export default Movies;