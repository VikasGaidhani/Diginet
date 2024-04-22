

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-0 position-Fixed">
      <div className="container-fluid bg-dark border-bottom border-warning border-5 p-3">
        <NavLink to="/" className="navbar-brand text-white fs-4" activeClassName="">
          DIGINET
        </NavLink>
        <button
          className={`navbar-toggler bg-warning ${isNavOpen ? 'collapsed' : ''}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded={isNavOpen ? 'true' : 'false'}
          aria-label="Toggle navigation"
          onClick={handleToggle}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-decoration-none ms-5 "
                activeClassName="active"
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link text-decoration-none ms-3 abc "
                activeClassName="active"
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/services"
                className="nav-link text-decoration-none ms-3 abc "
                activeClassName="active"
              >
                SERVICES
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className="nav-link text-decoration-none ms-3 abc"
                activeClassName="active"
              >
                CONTACT US
              </NavLink>
            </li>
          </ul>

          <div className="bg-warning">
            <button className="btn ">
              <span className='text-white'>
                <i className="fas fa-phone-flip"></i> PHONE NUMBER
                <br />
                +91 8007030184
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
