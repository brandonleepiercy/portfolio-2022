import React from 'react';
import './Hero.css';
import Typist from 'react-typist';

let statements = [
  "full stack software engineer.",
  "UI/UX designer.",
  "a professional with React.js.",
  "Typescript.",
  "Javascript.",
  ".",
  "Spring Boot.",
  "Node.js.",
  "MySQL.",
  "MongoDB.",
  "AWS DynamoDB.",
  "Lambdas.",
  "Amplify.",
  "Cognito.",
  "Code Pipeline.",
  "n investor.",
  " mechanic.",
  " race car driver.",
  " business owner."
]

function HeroBack() {
  return (
      <div className='hero-background'>
          <div className='hero-back-diagonal'/>
          <div className='hero-text-wrapper'>
            <div className='hero-text-hello'>
              Hello,
            </div>
            <div className='hero-text-name'>
              BRANDON PIERCY
            </div>
          </div>
          <div className='hero-tagline-typer'>
            <Typist stdTypingDelay={45} cursor={{blink:true}}>
              <Typist.Delay ms={2000}/>
              {statements[0]}
              <Typist.Backspace delay={500} count={statements[0].length}/>
              {statements[1]}
              <Typist.Backspace delay={500} count={statements[1].length}/>
              {statements[2]}
              <Typist.Backspace delay={500} count={statements[2].length-(("a professional with ").length)}/>
              {statements[3]}
              <Typist.Backspace delay={500} count={statements[3].length}/>
              {statements[4]}
              <Typist.Backspace delay={500} count={"script.".length}/>
              {statements[5]}
              <Typist.Backspace delay={500} count={"Java.".length}/>
              {statements[6]}
              <Typist.Backspace delay={200} count={statements[6].length}/>
              {statements[7]}
              <Typist.Backspace delay={200} count={statements[7].length}/>
              {statements[8]}
              <Typist.Backspace delay={200} count={statements[8].length}/>
              {statements[9]}
              <Typist.Backspace delay={200} count={statements[9].length}/>
              {statements[10]}
              <Typist.Backspace delay={200} count={"DynamoDB.".length}/>
              {statements[11]}
              <Typist.Backspace delay={100} count={statements[11].length}/>
              {statements[12]}
              <Typist.Backspace delay={100} count={statements[12].length}/>
              {statements[13]}
              <Typist.Backspace delay={100} count={statements[13].length}/>
              {statements[14]}
              <Typist.Backspace delay={100} count={" professional with AWS Code Pipeline.".length}/>
              {statements[15]}
              <Typist.Backspace delay={100} count={statements[15].length}/>
              {statements[16]}
              <Typist.Backspace delay={100} count={statements[16].length}/>
              {statements[17]}
              <Typist.Backspace delay={100} count={statements[17].length}/>
              {statements[18]}
              <Typist.Backspace delay={100} count={statements[18].length+2}/>
              Engineer, Investor, Driver.
            </Typist>
          </div>
      </div>
  );
}

export default HeroBack;
