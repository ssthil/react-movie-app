import { ADD_MOVIE } from '../constants/action-types';

const initialState = {
  movies: [
    {
      id: 1,
      title: 'Movie One 1'
    }
  ]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOVIE:
      return {
        ...state,
        movies: state.movies.concat(action.payload)
      };
    default:
      return state;
  }
};

export default rootReducer;
