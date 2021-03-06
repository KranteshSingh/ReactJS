import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const NavBar = ({ user }) => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Vidly App
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="navitem nav-link" to="/movies">
              Movies
            </NavLink>
            <NavLink className="navitem nav-link" to="/customers">
              Customers
            </NavLink>
            <NavLink className="navitem nav-link" to="/rentals">
              Rentals
            </NavLink>
            {!user && (
              <React.Fragment>
                <NavLink className="navitem nav-link" to="/login">
                  Login
                </NavLink>
                <NavLink className="navitem nav-link" to="/register">
                  Register
                </NavLink>
              </React.Fragment>
            )}
            {user && (
              <React.Fragment>
                <NavLink className="navitem nav-link" to="/profile">
                  {user.name}
                </NavLink>
                <NavLink className="navitem nav-link" to="/logout">
                  Logout
                </NavLink>
              </React.Fragment>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
