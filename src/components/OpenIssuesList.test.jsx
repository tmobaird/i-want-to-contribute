import React from 'react';
import ReactDOM from 'react-dom';
import OpenIssuesList from './OpenIssuesList';
import { shallow } from 'enzyme';

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
    ReactDOM.render(<OpenIssuesList issues={data} />, div);
  });
  describe('issues is null', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<OpenIssuesList  />, div);
    });
  });
  describe('when issues count <= 0', () => {
    it('renders No Open Issues Found', () => {
      const wrapper = shallow(<OpenIssuesList issues={[]} />);
      expect(wrapper.contains(<h5 className="text-center">No Open Issues Found</h5>)).toBe(true);
    });
  });
  describe('when issues count === 1', () => {
    const issues = [
      {
        labels: [],
        title: "Test Issue",
        html_url: "test-issue-url.com",
        number: 1,
        created_at: new Date()
      }
    ]
    const wrapper = shallow(<OpenIssuesList issues={issues} />);

    it('renders one OpenIssue', () => {
      expect(wrapper.find('OpenIssue')).toHaveLength(1);
    });
  });
  describe('when issues count > 1', () => {
    const issues = [
      {
        labels: [],
        title: "Test Issue",
        html_url: "test-issue-url.com",
        number: 1,
        created_at: new Date()
      },
      {
        labels: [],
        title: "Test Issue Two",
        html_url: "test-issue-two-url.com",
        number: 2,
        created_at: new Date()
      }
    ]
    const wrapper = shallow(<OpenIssuesList issues={issues} />);

    it('renders multiple OpenIssue', () => {
      expect(wrapper.find('OpenIssue')).toHaveLength(2);
    });
  })
});
