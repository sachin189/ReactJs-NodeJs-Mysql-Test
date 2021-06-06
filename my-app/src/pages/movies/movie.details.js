import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

import './moviesdetails.css';

import { moviesActions } from '../../redux/actions/movies.action'

const MoviesDetails = (props) =>{

    const movieDetails  = useSelector( state => state.movies);
    const dispatch = useDispatch();
    const { movieId } = useParams();

    const { title, duration,release_date,storyline,imdb_rating,created_year } = movieDetails.movieDetails;

    useEffect(() => {
        dispatch(moviesActions.getMovieDetails(movieId));
    }, [movieId]);

    /* const selectMovieList = () => {
        return (
                <div className="media"><img className="mr-3" src={posterurl} alt="Generic placeholder image"/>
                    <div className="media-body">
                        <h5 className="mt-0">Media heading</h5>
                    </div>
                </div>
            )
    } */

    return (   
            
            <section className="mb-5">
                <div className="row">
                    <div className="col-md-4 mb-4 mb-md-0">
                        <img className="mr-3 poster" src="https://images-na.ssl-images-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_SY500_CR0,0,337,500_AL_.jpg" alt="Generic placeholder image"/>
                    </div>
                    <div className="col-md-8 details-body">
                        <h5>{title}</h5>
                        <p className="pt-1">{storyline}</p>
                        <div class="table-responsive">
                            <table class="table table-sm table-borderless mb-0">
                                <tbody>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Duration</strong></th>
                                        <td>{duration}</td>
                                    </tr>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Release Date</strong></th>
                                        <td>{created_year}</td>
                                    </tr>
                                    <tr>
                                        <th class="pl-0 w-25" scope="row"><strong>Created Year</strong></th>
                                        <td>{release_date}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
      
                    </div>
                </div>
            </section>
        )
}

export default MoviesDetails;