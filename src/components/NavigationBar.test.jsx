import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './NavigationBar';
import { MemoryRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter >
      <NavigationBar />
    </MemoryRouter>
    , div
  );
});
