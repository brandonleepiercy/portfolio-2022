import React, { useState } from 'react';
import './ProjectsBox.css';

import Typist from 'react-typist';

import PBScreenRow from './PBScreenRow/PBScreenRow';
import PBScreenSelected from './PBScreenSelected/PBScreenSelected';

const projects = [
  {
    id: 0,
    title: 'portfolio-2022',
    size: '14.05 MB',
    public: true,
    githubLink: 'https://github.com/brandonleepiercy/portfolio-2022',
    deployment: 'https://brandon.im/',
    img: 'https://hfmibiza.com/wp-content/uploads/2021/02/oliver-heldens.jpg',
    description: 'My revised portfolio for 2022. Done in quite a hurry and still evolving but I am much happier with it now than it was. Tried to focus on pleasing colors and modern 3-dimensonal effects. Designed and developed myself.',
    technology: 'React.js, Node.js, Express, Nodemailer, AWS Elastic Beanstalk, Amplify, AWS-SDK and SES'
  },
  {
    id: 1,
    title: 'java-gradle-springboot-backend',
    size: '83 KB',
    public: false,
    img: 'https://hfmibiza.com/wp-content/uploads/2021/02/oliver-heldens.jpg',
    description: 'Internal backend system ported from AWS Lambdas/DynamoDB to a Java/Gradle/Spring Boot backend hosted on AWS Elastic Beanstalk, via AWS CodePipeline & AWS RDS, developed in a team of 3.',
    technology: 'Java, Gradle, Spring Boot, AWS Elastic Beanstalk, CodePipeline, RDS, Cognito'
  },
  {
    id: 2,
    title: 'react-jest-social-media-site',
    size: '10.32 MB',
    public: false,
    img: 'https://hfmibiza.com/wp-content/uploads/2021/02/oliver-heldens.jpg',
    description: 'Picture sharing social media site developed in a 4 week cycle with 4 pair programmers. Responsible for coding front-end components and testing, as well as making calls to the back-end to route information. Also responsible for delivering presentations to relevant stakeholders at the end of sprints.',
    technology: 'React.js, Node.js, Jest, Amplify, auth0'
  },
  {
    id: 3,
    title: 'auto-parts-e-commerce-site',
    size: '7.92 MB',
    public: false,
    img: 'https://hfmibiza.com/wp-content/uploads/2021/02/oliver-heldens.jpg',
    description: 'MVP turn key auto-parts e-commerce store designed and developed as a part of an internal onboarding training program with Cognizant. Front end built with Typescript, React.js, and Node.js. Backend build on AWS Dynamo DB, routes handled with AWS Lambdas. Authentication with AWS Cognito and payment with Stripe. Deployed AWS accounts shut down, seeking to re-deploy.',
    technology: 'Typescript, React.js, Node.js, AWS Lambdas, AWS DynamoDB, AWS Cognito, Stripe' 
  },
  {
    id: 4,
    title: 'snippet.ltd',
    size: '5.65 MB',
    public: true,
    githubLink: 'https://github.com/ma-wong/project-3',
    deployment: 'http://snippet.ltd/',
    img: 'https://hfmibiza.com/wp-content/uploads/2021/02/oliver-heldens.jpg',
    description: 'Final project for the coding bootcamp I completed in January of 2020. Part of a team of 5, handled building front-end components as well as building out all of the routing for all of the various data models to the SQL backend. Front end on AWS Amplify, backend on RDS.',
    technology: 'React.js, Node.js, SQL' 
  }
];

function ProjectsBox() {

  let [home, setHome] = useState(true);
  let [selected, setSelected] = useState(-1);
  let [returning, setReturning] = useState(false);

  return (
      <div className='project-box-container'>
        <div className='project-box-decoration'>
          <Typist>
            <Typist.Delay ms={2350}/>
            WORK
          </Typist>
        </div>
        <div className={returning ? 'project-box-screen-no-fade' : 'project-box-screen'}>
          {home ? 
          <div className='project-screen-home-wrapper'>
            <div className='screen-home-index'>
              <div className='screen-index-title'>
                Title
              </div>

              <div className='screen-index-size'>
                Size
              </div>
            </div>
            {projects.map((project) => (
              <PBScreenRow title={project.title} size={project.size} key={project.id} id={project.id} setSelected={setSelected} setHome={setHome} returning={returning}/>
            ))}
          </div> : 
          <PBScreenSelected project={projects[selected]} setHome={setHome}  setSelected={setSelected} setReturning={setReturning}/>}
        </div>
      </div>
  );
}

export default ProjectsBox;
