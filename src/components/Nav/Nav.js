import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

function Nav() {

    return (
      <div className='nav-container'>
          <div className='nav-wrapper'>
              <div className='nav-button'>
                <Link to="/">Home</Link>
              </div>
              <div className='nav-button'>
                <Link to="/about">About Me</Link>
              </div>
              <div className='nav-button'>
                <Link to="/projects">Projects</Link>
              </div>
              <div className='nav-button'>
                <Link to="/contact">Contact</Link>
              </div>
              <div className='nav-button'>
                <Link to="/resume">Resume</Link>
              </div>                                                        
          </div>
          <div className='nav-line'>
          </div>
      </div>
  );
}

export default Nav;
