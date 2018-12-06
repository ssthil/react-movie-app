import React, { Component } from 'react';
/** internal component */
import MovieList from './MovieList';

const MOVIE_API_URL = 'https://api.themoviedb.org/3/';
const MOVIE_API_URI = 'movie/popular';
const API_KEY = '1260ebdbf1855b4b6103abebc3372628';

class PopularMovies extends Component {
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

export default PopularMovies;
