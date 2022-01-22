import React from 'react';
import './About.css';

import SideBranding from '../../components/SideBranding/SideBranding';
import AboutHeading from '../../components/AboutHeading/AboutHeading';
import AboutBody from '../../components/AboutBody/AboutBody';
import AboutFloatingImage from '../../components/AboutFloatingImage/AboutFloatingImage';

function About() {
  return (
      <div className='about-back'>
          <div className='about-side-container'>
              <SideBranding left={true}/>
          </div>
          <div className='about-middle-container'>
              <AboutHeading />
              <AboutBody />
          </div>
          <div className='about-side-container'>
              <SideBranding left={false}/>
          </div>
          <AboutFloatingImage/>
      </div>
  );
};

export default About;