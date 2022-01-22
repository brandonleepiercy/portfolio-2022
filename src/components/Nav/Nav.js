import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {

  //Instantiating state variables manage appearance of nav bar based on whether the user is at home, about, or project and create.

  let [atHome, setAtHome] = useState(true);
  let [homeOrAbout, setHomeOrAbout] = useState(true);

  //If the user manually types in a path the nav bar will check the path ending on load to render the right version

  useEffect(() => {
    let path = window.location.pathname;

    if (path === '/') {
      setAtHome(true);
      setHomeOrAbout(true);
    } else if (path === '/about') {
      setAtHome(false);
      setHomeOrAbout(true);
    } else if (path === '/projects' || '/contact' || '/resume') {
      setAtHome(false);
      setHomeOrAbout(false);
    }
  }, []);

  //Click handler to handle state when navigating through the site via the navbar

  const handleClick = (homeOrNot, homeOrAbout) => {
    setAtHome(homeOrNot);
    setHomeOrAbout(homeOrAbout);
  };

  return (
    <div>
      {atHome ? <div></div> : <div className='nav-initials-logo' id={homeOrAbout ? 'nav-logo-red' : 'nav-logo-green'}>BP</div>}
      <div className={atHome ? 'nav-container' : 'nav-container-away'}>
          <div className={atHome ? 'nav-wrapper' : 'nav-wrapper-away'}>

            <div className={homeOrAbout ? 'nav-button nav-red' : 'nav-button nav-green'}>
              <Link onClick={atHome ? () => console.log(): () => handleClick(true, true)} to="/">Home</Link>
            </div>

            <div className={homeOrAbout ? 'nav-button nav-red' : 'nav-button nav-green'}>                
              <Link onClick={homeOrAbout? () => handleClick(false, true) : () => handleClick(false, true)} to="/about">About Me</Link>
            </div>

            <div className={homeOrAbout ? 'nav-button nav-red' : 'nav-button nav-green'}>
              <Link onClick={homeOrAbout? () => handleClick(false, false) : console.log()} to="/projects">Projects</Link>
            </div>

            <div className={homeOrAbout ? 'nav-button nav-red' : 'nav-button nav-green'}>
              <Link onClick={homeOrAbout? () => handleClick(false, false) : console.log()} to="/contact">Contact</Link>
            </div>

            <div className={homeOrAbout ? 'nav-button nav-red' : 'nav-button nav-green'}>
              <Link to='/RESUME.pdf' target="_blank" download>Resume</Link>
            </div>

          </div>

          <div className={atHome ? 'nav-line' : 'nav-line-away'} id={homeOrAbout ? 'nav-line-red' : 'nav-line-green'}>

          </div>

      </div>
    </div>
  );
};

export default Nav;
