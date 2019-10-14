import React from 'react';

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log('Navbar - Rendered');
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="https://krantesh.com" className="navbar-brand">
        Navbar{' '}
        <span className="badge badge-pill badge-secondary">
          {totalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
