import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import OpenIssuesRow from './OpenIssuesRow';

describe('render()', () => {
  describe('data length is greater than 0', () => {
    const openIssues = [{
      labels: [],
      title: "Test Issue",
      html_url: "test-issue-url.com",
      number: 1,
      created_at: new Date()
    }];

    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<OpenIssuesRow openIssues={openIssues} />, div);
    });
    it('includes two OpenIssuesList', () => {
      const wrapper = shallow(<OpenIssuesRow openIssues={openIssues} />);
      expect(wrapper.find("OpenIssuesList")).toHaveLength(2);
    });
  });
  describe('data length is NOT greater than 0', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<OpenIssuesRow  openIssues={[]} />, div);
    });
  });
  describe('when data prop is not present', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<OpenIssuesRow  />, div);
    });
  });
});
