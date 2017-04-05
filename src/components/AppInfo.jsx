import React, { PropTypes } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class AppInfo extends React.Component {
  render() {
    return (
      <Row>
        <Col xs={12} md={10} mdOffset={1}>
          <p className="text-center" style={{fontSize: "30px", lineHeight: "40px", color: "#5bc0de"}}>Contributing to open source can be hard, but it shouldn't be. We try to make that a little bit easier</p>
          <hr style={{width: "40%", marginBottom: "0px"}} />
          <Row>
            <Col md={10} mdOffset={1} className="text-center">
              <h3 style={{color: "#3572A5"}}>Find any project on Github</h3>
              <p style={{fontSize: "16px"}}>I Want To Contribute allows you to search for any project that exists on
                github.com and will easily show you the contriubting info for the project, as well as some good places to start contributing.
                We know contributing is hard, but is awesome at the same time! So we hope to welcome as many people we can, with open arms,
                to the open source community. If you have any suggestions for potential features to add, feel free to create an issue about it <a>here</a>!</p>
            </Col>
          </Row>
          <Row>
            <Col sm={6} className="text-center">
              <h3 style={{color: "#89e051"}}>Built w/ Modern Tools</h3>
              <p>This app is built with a group of widely popular libraries. The most important being:
               ReactJS, Redux, Bootstrap, Webpack, and Jest. These make up a very common, yet elegant, modern web tech stack. We hope our codebase can serve
              as an example for some of the best practices for these libraries.</p>
            </Col>
            <Col sm={6} className="text-center">
              <h3 style={{color: "#f34b7d"}}>Hosted on Github Pages</h3>
              <p>The awesome people at Github have made it incredibly easy to host applications on Github (via Github Pages). This app currently lives on Github Pages. This is possible because of the amazing
               work by the contributors of create-react-app (and those at Github).</p>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
