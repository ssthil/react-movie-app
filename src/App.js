import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

/** internal component */
import Header from './components/Header';
import TrendingMovies from './components/TrendingMovies';
import PopularMovies from './components/PopularMovies';
import TopRatedMovies from './components/TopRatedMovies';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={TrendingMovies} />
          <Route path="/trending" component={TrendingMovies} />
          <Route path="/popular" component={PopularMovies} />
          <Route path="/top_rated" component={TopRatedMovies} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
