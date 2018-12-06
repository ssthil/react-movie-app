import { ADD_MOVIE } from '../constants/action-types';

// const MY_API_KEY = 'c39a26d9c12f48dba2a5c00e35684ecc';

export const addMovies = movie => ({
  type: ADD_MOVIE,
  payload: movie
});
