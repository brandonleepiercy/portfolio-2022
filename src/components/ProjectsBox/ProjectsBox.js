import React, { useState } from 'react';
import './ProjectsBox.css';

import Typist from 'react-typist';

import PBScreenRow from './PBScreenRow/PBScreenRow';
import PBScreenSelected from './PBScreenSelected/PBScreenSelected';

const projects = [
  {
    id: 0,
    title: 'festival-finder',
    size: '279 KB',
    public: true,
    githubLink: 'https://github.com/brandonleepiercy/festival-finder',
    deployment: 'https://main.d3h0yc09bp5aza.amplifyapp.com/',
    img: 'https://i.imgur.com/6uVwOtz.png',
    description: 'Simple web app meant to help users find music festivals to attend. Solo project outside of work, deployed on AWS. Incomplete & in progress.',
    technology: 'React.js, Node.js, AWS Amplify' 
  },
  {
    id: 1,
    title: 'portfolio-2022',
    size: '14.05 MB',
    public: true,
    githubLink: 'https://github.com/brandonleepiercy/portfolio-2022',
    deployment: 'https://brandon.im/',
    img: 'https://i.imgur.com/orZeajA.png',
    description: "My revised portfolio for 2022. Done in quite a hurry and it's still evolving, but I'm much happier with it's current form. I tried to focus on universal pleasing colors and modern 3-dimensonal effects. Designed and developed myself.",
    technology: 'React.js, Node.js, Express, AWS Elastic Beanstalk, Amplify, AWS-SDK and SES'
  },
  {
    id: 2,
    title: 'java-gradle-springboot-backend',
    size: '83 KB',
    public: false,
    img: 'https://i.imgur.com/GS62PDv.png',
    description: 'Internal backend system ported from AWS Lambdas/DynamoDB to a Java/Gradle/Spring Boot/SQL backend hosted on AWS Elastic Beanstalk, via AWS CodePipeline & AWS RDS, developed in a team of 3. The Cognizant AWS account that this is hosted on is not public.',
    technology: 'Java, Gradle, Spring Boot, AWS Elastic Beanstalk, CodePipeline, RDS, Cognito'
  },
  {
    id: 3,
    title: 'react-jest-social-media-site',
    size: '10.32 MB',
    public: false,
    img: 'https://i.imgur.com/inEUFED.png',
    description: 'Picture sharing social media site developed in a 4 week cycle with 4 pair programmers. Responsible for coding front-end components and testing, as well as making calls to the back-end to route & retrieve information. Also responsible for delivering presentations to the relevant stakeholders at the end of sprints. The Cognizant AWS account that this is hosted on is not public.',
    technology: 'React.js, Node.js, Jest, Amplify, auth0'
  },
  {
    id: 4,
    title: 'auto-parts-e-commerce-site',
    size: '7.92 MB',
    public: false,
    img: 'https://i.imgur.com/inEUFED.png',
    description: 'MVP turn key auto-parts e-commerce store designed and developed as a part of an internal onboarding training program with Cognizant. Front end built with Typescript, React.js, and Node.js. Backend built on AWS Dynamo DB, routes handled with AWS Lambdas. Authentication with AWS Cognito and payment with Stripe. The Cognizant AWS account that this is hosted on is not public.',
    technology: 'Typescript, React.js, Node.js, AWS Lambdas, AWS DynamoDB, AWS Cognito, Stripe' 
  },
  {
    id: 5,
    title: 'snippet.ltd',
    size: '5.65 MB',
    public: true,
    githubLink: 'https://github.com/ma-wong/project-3',
    deployment: 'http://snippet.ltd/',
    img: 'https://i.imgur.com/rODu2hC.png',
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
