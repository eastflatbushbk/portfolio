import React from 'react'
import { useNavigate } from 'react-router-dom'



const Navbar = () => {
  const navigate = useNavigate();

  const handleSkillsNav = () => {
       navigate('/skills');
  };
  const handleProjectsNav = () => {
       navigate('/portfolio/projects');
  };
  const handleHomeNav = () => {
       navigate('/portfolio');
  };
 
  return (
    <div>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    {/* <a class="navbar-item has-text-info is-disable" href="/portfolio"> */}
      <button class="button is-dark" onClick={handleHomeNav}>
      ROBERT SAINTON
      </button>
    {/* </a> */}

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="https://bulma.io">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      
   
      <button class="button is-dark" onClick={handleHomeNav}>
        Home
      </button>
     
      {/* <a class="navbar-item"href="/about">
        About
      </a> */}
      
      
      <button class=" button is-dark "  onClick={handleSkillsNav}>
        Skills
      </button>
     
      
      
      <button class=" button is-dark" onClick={handleProjectsNav}>
        Projects
      </button>
     
     
    </div>
    
        
    <div class="navbar-end">
      <div class="navbar-item">
        {/* <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div> */}
  <div class="navbar-item has-dropdown is-hoverable">
        <a class="navbar-link" href="https://www.linkedin.com/in/robert-sainton-677500286/">
          Contact
        </a>

        <div class="navbar-dropdown">
          <a class="navbar-item" href="https://www.linkedin.com/in/robert-sainton-677500286/">
            LinkedIn
          </a>
          <a class="navbar-item"href="https://github.com/eastflatbushbk/">
            GitHub
          </a>
          
        </div>
      </div>

      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
