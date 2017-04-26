import React, { Component } from 'react';
import { Link, IndexLink } from 'react-router';
import { Row } from 'react-bootstrap';
import '../styles/navigation-bar.css';

class NavigationBar extends Component {
  render() {
    return (
      <Row className="NavigationBar">
        <IndexLink to="/" className="navbar-link" activeClassName="active">Home</IndexLink>
        {' | '}
        <Link to="/about" className="navbar-link" activeClassName="active">About</Link>
        {' | '}
        <Link to="/contributors" className="navbar-link" activeClassName="active">Contributors</Link>
      </Row>
    );
  }
}

export default NavigationBar;
