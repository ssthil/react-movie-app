import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';

/** internal component */
import Header from './components/Header';
import TrendingMovies from './components/Movies/Trending';
import PopularMovies from './components/Movies/Popular';
import TopRatedMovies from './components/Movies/TopRated';

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
