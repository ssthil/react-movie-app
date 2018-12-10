import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import swal from 'sweetalert';
import SearchComponent from '../components/Search';

class Header extends Component {
  state = {
    query: ''
  };
  handleInputChange = (event) => {
    event.preventDefault();
    this.setState({
      query: event.target.value
    });
  }
  onSubmit = event => {
    event.preventDefault();
    swal({
      text:`Searched movie is: ${this.state.query} and this functionality would be implemented yet`,
      icon: 'success',
      button: 'Thank you!'
    });
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-custom">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 margin-right-sm">
            Movie App
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  exact
                  to="/trending"
                  className="nav-link"
                  activeClassName="selected"
                >
                  Trending Movies <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/popular"
                  className="nav-link"
                  activeClassName="selected"
                >
                  Polpular Movies
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/top_rated"
                  className="nav-link"
                  activeClassName="selected"
                >
                  Top Rated Movies
                </NavLink>
              </li>
            </ul>
            <form className="form-inline" onSubmit={this.onSubmit}>
              <SearchComponent ref={input => (this.search = input)} onChange={this.handleInputChange}/>
              <button className="btn btn-warning my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
