import React, { Component } from 'react';
/** internal component */
import MovieList from '../MovieList';
/** credential */
import { MOVIE_API_URL, MOVIE_API_URI } from '../../config';
import { REACT_MOVIE_APP_API_KEY } from '../../../credentials';

const API_KEY = REACT_MOVIE_APP_API_KEY;

class TopRatedMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  componentDidMount() {
    fetch(`${MOVIE_API_URL}${MOVIE_API_URI}?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          movies: data.results
        })
      );
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <MovieList movies={this.state.movies} />
        </div>
      </div>
    );
  }
}

export default TopRatedMovies;
