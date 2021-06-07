import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import './moviesdetails.css';

import { moviesActions } from '../../redux/actions/movies.action'

const MoviesDetails = (props) =>{

    const movieDetails  = useSelector( state => state.movieDetails);
    const dispatch = useDispatch();
    
    const { movieId } = useParams();

    useEffect(() => {
        dispatch( moviesActions.getMovieDetails(movieId) );
    }, [movieId]);

    return (    
            <section className="mb-5">
                {movieDetails.item && <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <img className="mr-3 poster" src={movieDetails.item.posterurl} alt="Generic placeholder image"/>
                    </div>
                    <div className="col-md-8 details-body">
                        <h5>{movieDetails.item.title}</h5>
                        <p className="pt-1">{movieDetails.item.storyline}</p>
                        <div className="table-responsive">
                            <table className="table table-sm table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Duration</strong></th>
                                        <td>{movieDetails.item.duration}</td>
                                    </tr>
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Release Date</strong></th>
                                        <td>{movieDetails.item.created_year}</td>
                                    </tr>
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Created Year</strong></th>
                                        <td>{movieDetails.item.release_date}</td>
                                    </tr>
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Category</strong></th>
                                        <td>{movieDetails.item.genres}</td>
                                    </tr>
                                    <tr>
                                        <th className="pl-0 w-25" scope="row"><strong>Star Cast</strong></th>
                                        <td>{movieDetails.item.actors}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
      
                    </div>
                </div> }
            </section>
            
        )
}

export default MoviesDetails;