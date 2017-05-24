import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Row } from 'react-bootstrap';
import '../styles/navigation-bar.css';
import githubLogo from '../../public/GitHub-Mark-32px.png';

class NavigationBar extends Component {
  render() {
    return (
      <Row className="NavigationBar">
        <IndexLink to="/" className="navbar-link" activeClassName="active">Home</IndexLink>
        {' | '}
        <Link to="/about" className="navbar-link" activeClassName="active">About</Link>
        {' | '}
        <Link to="/contributors" className="navbar-link" activeClassName="active">Contributors</Link>
        <a href="https://github.com/tmobaird/i-want-to-contribute" className="navbar-link navbar-link-right">Find me on Github <img alt="" src={githubLogo}></img></a>
      </Row>
    );
  }
}

export default NavigationBar;
