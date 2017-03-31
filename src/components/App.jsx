import React, { Component, PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import helloWorld from '../test';
import logo from '../logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <h3>{ helloWorld() }</h3>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">
          <IndexLink to="/">Home</IndexLink>
          {' | '}
          <Link to="/about">About</Link>
          <br/>
          {this.props.children}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
