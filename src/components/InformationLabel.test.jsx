import React from 'react';
import ReactDOM from 'react-dom';
import InformationLabel from './InformationLabel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<InformationLabel />, div);
});
