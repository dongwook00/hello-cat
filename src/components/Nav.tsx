import React from 'react';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="nav" aria-label="Main Navigation">
      <a href="#" className="nav-logo" aria-label="Home page">
        logo
      </a>
      <ul className="nav-menu">
        <li>
          <a href="#">menu1</a>
        </li>
        <li>
          <a href="#">menu2</a>
        </li>
        <li>
          <a href="#">menu3</a>
        </li>
      </ul>
      <div className="nav-submenu">
        <button role="button">Log in</button>
        <button role="button">Sign up</button>
      </div>
    </nav>
  );
};

export default Nav;
