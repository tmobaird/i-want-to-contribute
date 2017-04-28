import React from 'react';
import { shallow } from 'enzyme';
import Contributor from '../Contributor';

describe('Contributor', () => {
  it('renders', () => {
    const wrapper = shallow(<Contributor />);
    expect(wrapper.find("li.contributor")).toHaveLength(1);
  });
  it('renders (using exists())', () => {
    const wrapper = shallow(<Contributor />);
    expect(wrapper.find("li.contributor").exists()).toBe(true);
  });
  describe('with props', () => {
    const props = { name: "Thomas", username: "tmobaird" };
    const wrapper = shallow(<Contributor {...props} />);

    it('displays name', () => {
      expect(wrapper.contains(<span>Thomas</span>)).toBe(true);
    });
    it('displays username link', () => {
      expect(wrapper.contains(<a href="http://github.com/tmobaird" target="_blank">@tmobaird</a>)).toBe(true);
    });
  });
});
