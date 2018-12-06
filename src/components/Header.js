import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-custom">
    <div className="container-fluid">
      <span className="navbar-brand mb-0 h1 margin-right-sm">Movie App</span>
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
      </div>
    </div>
  </nav>
);

export default Header;
