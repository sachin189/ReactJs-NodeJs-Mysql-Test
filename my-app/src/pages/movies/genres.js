import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import './movies.css';

import { moviesActions } from '../../redux/actions/movies.action'

const Genres = (props) =>{

    const moviesList  = useSelector( state => state.movies.moviesList);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviesActions.getAllMovies());
    }, []);

    const movieLists = moviesList.map( movie => {
        return (
                <div className="col-md-3" key={movie.id}>
                    <div className="product-wrapper mb-45 text-center">
                        <div className="product-img"> 
                            <Link to={`movie/${movie.id}`}>
                                 
                                <img src={movie.posterurl} alt={movie.title}/> 
                            </Link> 
                        </div>
                        <Link className="title" to={`movie/${movie.id}`}>{movie.title}</Link>
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

export default Genres;