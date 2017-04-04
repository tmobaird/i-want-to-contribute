import React from 'react';
import ReactDOM from 'react-dom';
import OpenIssue from './OpenIssue';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const data = {
    labels: [],
    title: "Test Issue",
    html_url: "test-issue-url.com",
    number: 1,
    created_at: new Date()
  }
  ReactDOM.render(<OpenIssue data={data} />, div);
});
