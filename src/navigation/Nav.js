import React from 'react';
import { NavLink } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import logo from '../images/planet.png';

export default function Nav() {
  const routLinks = [
    {
      path: '/',
      text: 'Rockets',
    },
    {
      path: '/mission',
      text: 'Missions',
    },
    {
      path: '/profile',
      text: 'My Profile',
    },
  ];
  return (
    <header className="header">
      <div className="left-nav">
        <img src={logo} alt="logo" />
        <h1>Space Travelers&apos; Hub</h1>
      </div>
      <nav className="right-nav">
        <ul className="nav-links">
          {routLinks.map((rout) => (
            <li key={uuid()} className="nav-link">
              <NavLink to={rout.path}>{rout.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
