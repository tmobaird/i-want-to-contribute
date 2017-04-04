import React from 'react';
import ReactDOM from 'react-dom';
import OpenIssuesRow from './OpenIssuesRow';

describe('render()', () => {
  describe('data length is greater than 0', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      const data = [{
        labels: [],
        title: "Test Issue",
        html_url: "test-issue-url.com",
        number: 1,
        created_at: new Date()
      }];
      ReactDOM.render(<OpenIssuesRow data={data} />, div);
    });
  });
  describe('data length is NOT greater than 0', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<OpenIssuesRow  data={[]} />, div);
    });
  });
  describe('when data prop is not present', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<OpenIssuesRow  />, div);
    });
  });
});
