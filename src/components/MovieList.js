import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import { connect } from 'react-redux';
// import Typography from '@material-ui/core/Typography';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    const poster_path_src = 'https://image.tmdb.org/t/p/w200';
    const formatDate = value => {
      return moment(value).format('ll');
    };

    // const ModalWindow = () => (
    //   <div className="modal fade" id="myModal" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    //   <div className="modal-dialog">
    //     <div className="modal-content">
    //       <div className="modal-header">
    //         <h5 className="modal-title">Modal title</h5>
    //         <button type="button" className="close" data-dismiss="modal" aria-label="Close">
    //           <span aria-hidden="true">&times;</span>
    //         </button>
    //       </div>
    //       <div className="modal-body">
    //         <p>Modal body text goes here.</p>
    //       </div>
    //       <div className="modal-footer">
    //         <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
    //         <button type="button" className="btn btn-primary">Save changes</button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // );

    return (
      <Fragment>
        {movies.map(movie => (
          <div className="col-lg-3 col-sm-6 col-xs-12" key={movie.id}>
            <div className="card fixed-card-height">
              <img
                className="card-img-top"
                src={`${poster_path_src}${movie.poster_path}`}
                alt="poster"
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <p className="text text-danger">
                  {formatDate(movie.release_date)}
                </p>
                <p className="card-text">
                  {movie.overview.slice(0, 135) + '...'}
                </p>
                {/*<button type="button" className="btn btn-outline-info btn-sm" data-toggle="modal" data-target="moreInfo" >More Info</button>*/}
                <button
                  type="button"
                  className="btn btn-outline-info btn-sm"
                  data-toggle="modal"
                  data-target={`#myModal${movie.id}`}
                >
                  More Info
                </button>
                <div
                  className="modal fade"
                  id={`myModal${movie.id}`}
                  role="dialog"
                  aria-labelledby="myModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">{movie.title}</h5>
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <div className="img-section">
                          <img
                            className="card-img-top"
                            src={`${poster_path_src}${movie.poster_path}`}
                            alt="poster"
                          />
                        </div>
                        <div className="content-section">
                          <p>
                            Release Date:{' '}
                            <span className="text text-danger">
                              {formatDate(movie.release_date)}
                            </span>
                          </p>
                          <p>{movie.overview}</p>
                          <p>
                            Vote count:{' '}
                            <span className="text text-success">
                              {movie.vote_count}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-primary"
                          data-dismiss="modal"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
