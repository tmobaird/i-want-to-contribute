import React, { Component, PropTypes } from 'react';
import NavigationBar from './NavigationBar';
import '../styles/App.css';
import '../styles/bootstrap-overrides.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavigationBar />
        <div className="container">
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
