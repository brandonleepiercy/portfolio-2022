import React from 'react';
import './ProjectsBox.css';

import Typist from 'react-typist';

function ProjectsBox() {
  return (
      <div className='project-box-container'>
        <div className='project-box-decoration'>
          <Typist>
            <Typist.Delay ms={2350}/>
            WORK
          </Typist>
        </div>
        <div className='project-box-screen'>
            
        </div>
      </div>
  );
}

export default ProjectsBox;
