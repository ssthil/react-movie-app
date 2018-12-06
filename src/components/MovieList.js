import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import Typography from '@material-ui/core/Typography';

class MovieList extends PureComponent {
  render() {
    const { movies } = this.props;
    const poster_path_src = 'https://image.tmdb.org/t/p/w200';
    return (
      <Fragment>
        {movies.map(movie => (
          <div className="col-lg-2 col-sm-6 col-xs-12" key={movie.id}>
            <div className="card fixed-card-height">
              <img
                className="card-img-top"
                src={`${poster_path_src}${movie.poster_path}`}
                alt="poster"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="card-text">
                  {movie.overview.slice(0, 135) + '...'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;

/*
   {this.state.movies.map(movie => (
          <p key={movie.id}>{movie.title}</p>
        ))}
   */

/*
// redux part commended
const MovieList = ({ movies }) => (
  <div>
    {movies.map(movie => (
      <p key={movie.id}>{movie.title}</p>
    ))}
  </div>
);

const mapStateToProps = state => {
  return {
    movies: state.movies
  };
};



const List = connect(mapStateToProps)(MovieList);

export default List;
*/
