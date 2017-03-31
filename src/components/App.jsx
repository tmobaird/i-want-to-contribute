import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="container App">
        <IndexLink to="/">Home</IndexLink>
        {' | '}
        <Link to="/about">About</Link>
        <br/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
