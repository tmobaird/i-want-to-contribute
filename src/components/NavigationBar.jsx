import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import '../styles/navigation-bar.css';
import githubLogo from '../images/GitHub-Mark-32px.png';

class NavigationBar extends Component {
  render() {
    return (
      <Row className="NavigationBar">
        <Col md={6} sm={7} xs={12} className="navigation-bar-left">
            <NavLink
              to="/"
              className="navbar-link"
              activeClassName="active"
              exact
            >Home</NavLink>
            {' | '}
            <NavLink
              to="/about"
              className="navbar-link"
              activeClassName="active"
            >About</NavLink>
            {' | '}
            <NavLink
              to="/contributors"
              className="navbar-link"
              activeClassName="active"
            >Contributors</NavLink>
        </Col>
        <Col md={6} sm={5} xs={12} className="navigation-bar-right">
            <a href="https://github.com/tmobaird/i-want-to-contribute" className="navbar-link">
              <span className="find-me-on-github">Find me on Github</span><img alt="Github" className="githubLogo" src={githubLogo} />
            </a>
        </Col>
      </Row>
    );
  }
}

export default NavigationBar;
