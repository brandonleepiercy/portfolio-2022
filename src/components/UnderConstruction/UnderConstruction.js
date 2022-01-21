import React from 'react';
import './UnderConstruction.css';

import { ClockLoader } from 'react-spinners';


function UnderConstruction() {
  return (
      <div className='construction-container'>
          <div className='construction-wrapper'>
              <ClockLoader color='#ADB8A2' size={200}/>
              THIS PAGE IS UNDER CONSTRUCTION
          </div>
      </div>
  );
};

export default UnderConstruction;
