import React from 'react';
import './Hero.css';
import ClockLoader from 'react-spinners/ClockLoader';

function Hero() {
  return (
      <div className='loading-container'>
          <div className='loading-wrapper'>
              <ClockLoader color={'#977777'}/>
              SITE UNDER DEVELOPMENT
          </div>
      </div>
  );
}

export default Hero;
