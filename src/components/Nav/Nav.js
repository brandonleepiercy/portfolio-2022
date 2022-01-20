import React, { useState } from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

  let [atHome, setAtHome] = useState(true);

  const handleClick = (homeOrNot) => {
    if (homeOrNot == true) {
      setAtHome(true);
    } else if (homeOrNot == false) {
      setAtHome(false);
    };
  };

  return (
    <div>
      {atHome ? <div></div> : <div className='nav-initials-logo'>BP</div>}
      <div className={atHome ? 'nav-container' : 'nav-container-away'}>
          <div className={atHome ? 'nav-wrapper' : 'nav-wrapper-away'}>
              <div className='nav-button' onClick={atHome ? () => console.log('Already at home.'): () => handleClick(true)}>
                <Link to="/">Home</Link>
              </div>
              <div className='nav-button'>
                <Link onClick={atHome? () => handleClick(false) : console.log()} to="/about">About Me</Link>
              </div>
              <div className='nav-button'>
                <Link onClick={atHome? () => handleClick(false) : console.log()} to="/projects">Projects</Link>
              </div>
              <div className='nav-button'>
                <Link onClick={atHome? () => handleClick(false) : console.log()} to="/contact">Contact</Link>
              </div>
              <div className='nav-button'>
                <Link onClick={atHome? () => handleClick(false) : console.log()} to="/resume">Resume</Link>
              </div>                                                        
          </div>
          <div className={atHome ? 'nav-line' : 'nav-line-away'}>
          </div>
      </div>
    </div>
  );
};

export default Nav;
