import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav" aria-label="Main Navigation">
      <a href="/" className="nav-logo" aria-label="Home page">
        logo
      </a>
      <ul className="nav-menu">
        <li>
          <a href="/">menu1</a>
        </li>
        <li>
          <a href="/">menu2</a>
        </li>
        <li>
          <a href="/">menu3</a>
        </li>
      </ul>
      <div className="nav-submenu">
        <Link to="/login">
          <button>Log in</button>
        </Link>
        <Link to="/signup">
          <button>Sign up</button>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
