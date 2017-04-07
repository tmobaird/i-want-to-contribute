import React from 'react';
import ReactDOM from 'react-dom';
import BsSpecialLabel from './BsSpecialLabel';

describe('render()', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BsSpecialLabel />, div);
  });
  describe('when props are given', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      const props = { level: "success", color: "#FFFFFF", fontSize: "15px" };
      ReactDOM.render(<BsSpecialLabel {...props} />, div);
    });
  });
});
