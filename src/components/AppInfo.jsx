import React from 'react';
import { Col, Row } from 'react-bootstrap';
import '../styles/app-info.css';

const AppInfo = (props) => (
  <Row>
    <Col xs={12} md={10} mdOffset={1}>
      <p className="text-center app-info-sub-header">
        Contributing to open source can be hard, but it shouldn't be. We try to make that a little bit easier
      </p>
      <hr className="no-bottom-margin" style={{width: "40%"}} />
      <Row>
        <Col md={10} mdOffset={1} className="text-center app-info-sub-section-1">
          <h3>Find any project on Github</h3>
          <p>I Want To Contribute allows you to search for any project that exists on
            github.com and will easily show you the contriubting info for the project, as well as some good places to start contributing.
            We know contributing is hard, but is awesome at the same time! So we hope to welcome as many people we can, with open arms,
            to the open source community. If you have any suggestions for potential features to add, feel free to create an issue about it <a>here</a>!</p>
        </Col>
      </Row>
      <Row>
        <Col sm={6} className="text-center app-info-sub-section-2">
          <h3>Built w/ Modern Tools</h3>
          <p>This app is built with a group of widely popular libraries. The most important being:
           ReactJS, Redux, Bootstrap, Webpack, and Jest. These make up a very common, yet elegant, modern web tech stack. We hope our codebase can serve
          as an example for some of the best practices for these libraries.</p>
        </Col>
        <Col sm={6} className="text-center app-info-sub-section-3">
          <h3>Hosted on Github Pages</h3>
          <p>The awesome people at Github have made it incredibly easy to host applications on Github (via Github Pages). This app currently lives on Github Pages. This is possible because of the amazing
           work by the contributors of create-react-app (and those at Github).</p>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default AppInfo;
