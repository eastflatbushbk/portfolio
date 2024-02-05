
import React from 'react'


const Navbar = () => {
  return (
    <div>
      <nav class="navbar is-dark" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item has-text-info is-disable" href="/home">
      ROBERT SAINTON
    </a>

    <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="https://bulma.io">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu">
    <div class="navbar-start">
      <a class="navbar-item"href="/home">
        Home
      </a>

      {/* <a class="navbar-item"href="/about">
        About
      </a> */}
      <a class="navbar-item"href="portfolio/skills">
        Skills
      </a>
      <a class="navbar-item"href="/projects">
        Projects
      </a>

     
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