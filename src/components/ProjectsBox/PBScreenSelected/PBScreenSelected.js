import React from 'react';

function PBScreenSelected(props) {


    let { setHome } = props;
    let { setSelected } = props;
    let { setReturning } = props;
    let { project } = props;

    return (
        <div className='project-screen-selected-wrapper' id={project.id}>
            <div className='project-selected-top-row'>
                <div className='project-selected-back-button' onClick={() => {
                    setSelected('');
                    setReturning(true);
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
                        <div className='github-link project-link'>
                            <a href={project.githubLink} target="_blank" rel='noreferrer'>Github</a>
                        </div>

                        <div className='deployment-link project-link'>
                            <a href={project.deployment} target='_blank' rel='noreferrer'>Deployment</a>
                        </div>
                    </div>
                    :null}
                </div>
            </div>
        </div>
    );
}

export default PBScreenSelected;
