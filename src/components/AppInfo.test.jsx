import React from 'react';
import ReactDOM from 'react-dom';
import AppInfo from './AppInfo';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AppInfo />, div);
});
