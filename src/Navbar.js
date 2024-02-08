import React from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate

const Navbar = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleNavigation = (path) => {
    navigate(path); // Use navigate function to go to the specified path
  };

  return (
    <div>
      <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          {/* Use Link component instead of anchor tag */}
          <Link className="navbar-item has-text-info" to="/home">
            ROBERT SAINTON
          </Link>

          <a
            role="button"
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            href="https://bulma.io"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link className="navbar-item" to="/portfolio">
              Home
            </Link>

            {/* Uncomment and adjust other routes as needed */}
            {/* <Link className="navbar-item" to="/about">
              About
            </Link> */}
            <Link className="navbar-item" to="/portfolio/skills">
              Skills
            </Link>
            <Link className="navbar-item" to="/portfolio/projects">
              Projects
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link" href="https://www.linkedin.com/in/robert-sainton-677500286/">
                  Contact
                </a>

                <div className="navbar-dropdown">
                  <a className="navbar-item" href="https://www.linkedin.com/in/robert-sainton-677500286/">
                    LinkedIn
                  </a>
                  <a className="navbar-item" href="https://github.com/eastflatbushbk/">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;