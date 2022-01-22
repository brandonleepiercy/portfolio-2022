import React from 'react';
import './AboutFloatingImage.css';

import floatingImage from '../../assets/images/AboutFloatingImage.png';

import Typist from 'react-typist';

function AboutFloatingImage() {
  return (
      <div className='floating-image-container'>
          <div className='floating-image-text'>
              <Typist>who am i?</Typist>
          </div>
          <div className='floating-image-wrapper'>
              <img className='floating-image' src={floatingImage} 
              alt='a red image of me servicing one of the spark plugs on my Cayenne. 
              I appear extra frustrated because I snapped the head off the prior coil pack bolt. 
              I believe the raw display of emotion adds to the artistic nature of the webpage overall.'/>
          </div>
      </div>
  );
}

export default AboutFloatingImage;
