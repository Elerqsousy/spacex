import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import logo from '../images/planet.png';

export default function Nav() {
  const routLinks = [
    {
      path: '/',
      text: 'My Profile',
    },
  ];
  return (
    <header className="header">
      <nav className="nav">
        <div className="left-nav">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-nav">
          <ul className="nav-links">
            {routLinks.map((rout) => (
              <li key={uuid()} className="nav-link">
                <NavLink to={rout.path}>{rout.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
