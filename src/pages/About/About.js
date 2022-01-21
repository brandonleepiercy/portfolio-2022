import React from 'react';
import './About.css';

import SideBranding from '../../components/SideBranding/SideBranding';

function About() {
  return (
      <div className='about-back'>
          <div className='about-side-container'>
              <SideBranding left={true}/>
          </div>
          <div className='about-middle-container'>

          </div>
          <div className='about-side-container'>
              <SideBranding left={false}/>
          </div>
      </div>
  );
};

export default About;