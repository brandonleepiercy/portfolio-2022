import React from 'react';
import { ClockLoader } from 'react-spinners';
import './UnderConstruction.css';

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
