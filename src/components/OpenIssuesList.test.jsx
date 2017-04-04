import React from 'react';
import ReactDOM from 'react-dom';
import OpenIssuesList from './OpenIssuesList';

describe('render()', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const data = [{
      labels: [],
      title: "Test Issue",
      html_url: "test-issue-url.com",
      number: 1,
      created_at: new Date()
    }];
    ReactDOM.render(<OpenIssuesList data={data} />, div);
  });
  describe('data is null', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<OpenIssuesList  />, div);
    });
  });
});
