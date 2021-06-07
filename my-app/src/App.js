import React, { Component } from 'react';
import {BrowserRouter as Router, Link, NavLink,Switch, Route } from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Header } from './components'

const Movies = 	React.lazy(() => import('./pages/movies/movies'));
const Genres = 	React.lazy(() => import('./pages/movies/genres'));
const MovieDetails = 	React.lazy(() => import('./pages/movies/movie.details'));

const loading = (
	<div className="spinner-layer">
		<div className="text-center">
			<div className="spinner-grow text-primary" role="status">
				<span className="sr-only"></span>
			</div>
		</div>
	</div>
)

const loadingApi = (
	<div id="laoderSpinner" className="spinner-layer d-none">
		<div className="text-center">
			<div className="spinner-grow text-primary" role="status">
				<span className="sr-only"></span>
			</div>
		</div>
	</div>
)



function App() {
  return (
    <div className="App">
		{loadingApi}
		<Router>
			<Header />
				<div className="container">
					<React.Suspense fallback={loading}>
						<Switch>
							<Route exact path="/" name="All Movies" render={props => <Movies {...props}/>} />
							<Route exact path="/movie/:movieId" name="Movie Details" render={props => <MovieDetails {...props}/>} />
							<Route exact path="/genres" name="All Movies" render={props => <Genres {...props}/>} />
						</Switch>
					</React.Suspense>	
				</div>
		</Router>	
    </div>
  );
}

export default App;
