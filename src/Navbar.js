import React, { useState } from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  const handleSkillsNav = () => {
    navigate('/portfolio/skills');
  };

  const handleProjectsNav = () => {
    navigate('/portfolio/projects');
  };

  const handleHomeNav = () => {
    navigate('/portfolio');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle menu visibility on click
  };
  

  return (
    <div>
      <nav className= {`navbar is-dark is-fixed-top ${isOpen ? 'is-active' :'' }`} role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <button className="button is-dark" onClick={handleHomeNav}>
            ROBERT SAINTON
          </button>

          <button  className={`navbar-burger ${isOpen ? 'is-active' : ''}`} aria-label="menu" aria-expanded={isOpen} data-target="navbarBasicExample" onClick={toggleMenu}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>

        <div id="navbarBasicExample" className={`navbar-menu 
 ${isOpen ? 'is-active' : ''}`}>
          <div className="navbar-start"> 

            <button className="button is-dark" onClick={handleHomeNav}>
              Home
            </button>

            <button className="button is-dark" onClick={handleSkillsNav}>
              Skills
            </button>

            <button className="button is-dark" onClick={handleProjectsNav}>
              Projects
            </button>
          </div>

          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link" href="https://www.linkedin.com/in/robert-sainton-677500286/" target="_blank" rel="noopener noreferrer">
                Contact
              </a>

              <div className="navbar-dropdown">
                <a className="navbar-item" href="https://www.linkedin.com/in/robert-sainton-677500286/" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a className="navbar-item" href="https://github.com/eastflatbushbk/" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar
