import * as React from 'react';

import './about.css';

export function AboutMe() {
  return (
    <React.Fragment>
      <h2 className="page-title">About Me</h2>
      <div className="about">
        <h1>Hi, I am here to help your next project!</h1>
        <p>
          Hello, I am Abderrahmane, professional full stack web development. I
          am working remotely on projects for clients. My skills is building web
          applications using those frameworks: Angular, ReactJS, NodeJS, all the
          way to mobile applications using Flutter or react native.
        </p>
      </div>
    </React.Fragment>
  );
}

export default AboutMe;
