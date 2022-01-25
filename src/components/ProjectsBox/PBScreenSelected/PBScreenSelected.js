import React, { useEffect } from 'react';

function PBScreenSelected(props) {


    let { setHome } = props;
    let { setSelected } = props;
    let { project } = props;


    useEffect(() => {
        console.log(project);
    }, [])

    return (
        <div className='project-screen-selected-wrapper' id={project.id}>
            <div className='project-selected-top-row'>
                <div className='project-selected-back-button' onClick={() => {
                    setSelected('');
                    setHome(true);
                }}>
                    <p className='back-button-text'>&lt;&lt;</p>
                </div>

                <div className='project-selected-title'>
                    {project.title}
                </div>
            </div>

            <div className='project-selected-content-row'>
                <div className='project-selected-image-wrapper'>
                    <img alt='' src={project.img}/>
                </div>

                <div className='project-selected-body-container'>
                    <div className='project-selected-description'>
                    {project.description}
                    </div>

                    <div className='project-selected-technologies'>
                    Technology Stack: {project.technology}
                    </div>

                    {project.public ? 
                    <div className='project-selected-links-container'>
                        <div className='github-link'>
                            <a href={project.githubLink} target="_blank">Github</a>
                        </div>

                        <div className='deployment-link'>
                            <a href={project.deployment} target='_blank'>Deployment</a>
                        </div>
                    </div>
                    :null}
                </div>
            </div>
        </div>
    );
}

export default PBScreenSelected;
