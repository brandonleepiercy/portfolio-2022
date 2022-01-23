import React from 'react';
import './Projects.css';

import SideBranding from '../../components/SideBranding/SideBranding';
import ProjectsHeading from '../../components/ProjectsHeading/ProjectsHeading';
import ProjectsBox from '../../components/ProjectsBox/ProjectsBox';

function Projects() {
    return (
        <div className='projects-back'>
            <div className='projects-side-container'>
                <SideBranding left={true} atAbout={false}/>
            </div>
            <div className='projects-middle-container'>
                <ProjectsHeading/>
                <ProjectsBox/>
            </div>
            <div className='projects-side-container'>
                <SideBranding left={false} atAbout={false}/>
            </div>
            <div className='projects-diagonal'>

            </div>
        </div>
    );
};

export default Projects;
