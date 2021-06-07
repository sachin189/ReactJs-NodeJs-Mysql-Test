import { combineReducers } from "redux";
import { movies, movieDetails } from "./movies.reducer"

const rootReducer = combineReducers({
  movies,
  movieDetails
});

export default rootReducer;