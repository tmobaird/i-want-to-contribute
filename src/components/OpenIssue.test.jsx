import React from 'react';
import ReactDOM from 'react-dom';
import OpenIssue from './OpenIssue';
import { shallow, mount } from 'enzyme';

describe('renders', () => {
  const data = {
    labels: [],
    title: "Test Issue",
    html_url: "test-issue-url.com",
    number: 1,
    created_at: new Date()
  }

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<OpenIssue data={data} />, div);
  });
  describe("bottom border rendering", () => {
    describe('when props.last === true', () => {
      it('does not include bottom border stlye', () => {
        const wrapper = shallow(<OpenIssue data={data} last={true} />);
        expect(wrapper.find(".OpenIssue.with-bottom-border")).toHaveLength(0);
      });
    });
    describe('when props.last != true', () => {
      it('includes bottom border stlye', () => {
        const wrapper = shallow(<OpenIssue data={data} last={false} />);
        expect(wrapper.find(".OpenIssue.with-bottom-border")).toHaveLength(1);
      });
    });
    describe('when props.last is undefined', () => {
      it('includes bottom border stlye', () => {
        const wrapper = shallow(<OpenIssue data={data} />);
        expect(wrapper.find(".OpenIssue.with-bottom-border")).toHaveLength(1);
      });
    });
  });
  describe("label rendering", () => {

  });
});
