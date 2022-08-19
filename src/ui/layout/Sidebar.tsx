import { faCircle, faDotCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink className="nav-item" to="/">
          About
        </NavLink>
        <NavLink className="nav-item" to="/experience">
          Experience
        </NavLink>
        <NavLink className="nav-item" to="/portfolio">
          Portfolio
        </NavLink>
        <NavLink className="nav-item" to="/contact">
          Contact
        </NavLink>
        {/* <NavLink className="nav-item" to="/">
          <FontAwesomeIcon icon={faCircle} /> <span>About</span>
        </NavLink>
        <NavLink className="nav-item" to="/experience">
          <FontAwesomeIcon icon={faDotCircle} /> <span>Experience</span>
        </NavLink>
        <NavLink className="nav-item" to="/portfolio">
          <FontAwesomeIcon icon={faCircle} /> <span>Portfolio</span>
        </NavLink>
        <NavLink className="nav-item" to="/contact">
          <FontAwesomeIcon icon={faCircle} /> <span>Contact</span>
        </NavLink> */}
      </nav>
    </div>
  );
}

export default Sidebar;
