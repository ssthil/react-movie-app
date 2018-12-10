import React, { Component } from 'react';
/** internal component */
import MovieList from '../MovieList';

/** credential */
import { MOVIE_API_URL, MOVIE_API_URI } from '../../config';
import { REACT_MOVIE_APP_API_KEY } from '../../../credentials';

const API_KEY = REACT_MOVIE_APP_API_KEY;

class PopularMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: []
    };
  }

  filterList(event){
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: updatedList});
  }

  componentDidMount() {
    fetch(`${MOVIE_API_URL}${MOVIE_API_URI.popular}?api_key=${API_KEY}`)
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
