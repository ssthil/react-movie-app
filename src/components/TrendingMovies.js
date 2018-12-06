import React, { Component } from 'react';
// import PropTypes from 'prop-types';
/** internal component */
import MovieList from './MovieList';

const MOVIE_API_URL = 'https://api.themoviedb.org/3/';
const MOVIE_API_URI = 'trending/all/day';
const API_KEY = '1260ebdbf1855b4b6103abebc3372628';

class TrendingMovies extends Component {
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

export default TrendingMovies;
