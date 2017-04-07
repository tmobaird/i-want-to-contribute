import React from 'react';
import ReactDOM from 'react-dom';
import ResultStatsRow from './ResultStatsRow';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = {};
  ReactDOM.render(<ResultStatsRow data={data} />, div);
});
