import React from 'react';
import './AboutBody.css';
import FloatingComponent from 'react-floating-component';

function AboutBody() {
  return (
      <div className='about-body-wrapper'>
        <FloatingComponent>
            <div className='about-body career'>
                Full-stack engineer currently working full-time for Cognizant. 
                <br/>
                Fluent with JavaScript, TypeScript and React.js for the Front-End.
                <br/>
                Fluent with Java, Spring Boot, AWS DynamoDB, AWS RDS, AWS Lambdas, MySQL and MongoDB for the Back-End.
                <br/>
                Extensive experience with REST API architecture and working in an AGILE environment.
            </div>
        </FloatingComponent>

        <FloatingComponent>
            <div className='about-body racing'>
                I am a passionate home mechanic and weekend race car driver.
                <br/>
                My current projects include 
                <br/>
                a 2013 VW CC
                <br/>
                a 2004 Cayenne S and 
                <br/>
                a 1984 Datsun 300ZX.
            </div>
        </FloatingComponent>

        <FloatingComponent>
            <div className='about-body side-hustles'>
                I'm the president and co-founder of two small businesses.
                <br/>One is a digital media warehouse for multiple brands focused on free digital content and ad revenue,
                <br/>The other is an actively managed real estate investment fund. 
                <br/>I've always had a passion for design, finance, motorsport, and technology. 
                <br/>This is the recipe for who I am today.
            </div>
        </FloatingComponent>
      </div>
  );
}

export default AboutBody;
