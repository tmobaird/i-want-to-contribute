import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import SearchBar from './SearchBar';

describe('renders', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchBar />, div);
  });
  describe('state', () => {
    const wrapper = mount(<SearchBar />); // Mount is needed here because refs aren't included in shallow
    const element = wrapper.instance().inputField; // This is your input ref

    describe('when focus is false', () => {
      it('has class non-focus', () => {
        wrapper.setState({ focus: false });
        expect(wrapper.find('div.non-focus')).toHaveLength(1);
      });
      it('blurs element', () => {
        wrapper.setState({ focus: true });
        const blur = spyOn(element, 'blur');
        wrapper.setState({ focus: false });
        wrapper.update()
        expect(blur).toHaveBeenCalled()
      });
    });
    describe('when focus is true', () => {
      it('has class focus', () => {
        wrapper.setState({ focus: true });
        expect(wrapper.find('div.focus')).toHaveLength(1);
      });
      it('focuses element', () => {
        wrapper.setState({ focus: false });
        const focus = spyOn(element, 'focus');
        wrapper.setState({ focus: true });
        wrapper.update()
        expect(focus).toHaveBeenCalled()
      });
    });
    describe('when glyphicon is clicked', () => {
      it('blurs input field', () => {
        const blur = spyOn(element, 'blur');
        wrapper.setState({ focus: true });
        wrapper.find('.glyphicon').simulate('click')
        expect(blur).toHaveBeenCalled()
      });
      it('adds non-focus class', () => {
        wrapper.setState({ focus: true });
        wrapper.find('.glyphicon').simulate('click')
        expect(wrapper.find('div.non-focus')).toHaveLength(1);
      });
    });
    describe('when div is clicked', () => {
      it('focuses input field', () => {
        const focus = spyOn(element, 'focus');
        wrapper.setState({ focus: false });
        wrapper.find('div.search-bar').simulate('click')
        expect(focus).toHaveBeenCalled()
      })
      it('adds focus class', () => {
        wrapper.setState({ focus: false });
        wrapper.find('div.search-bar').simulate('click')
        expect(wrapper.find('div.focus')).toHaveLength(1);
      });
    });
    describe('when div is blurred', () => {
      it('blurs input field', () => {
        const blur = spyOn(element, 'blur');
        wrapper.setState({ focus: true });
        wrapper.find('div.search-bar').simulate('blur')
        expect(blur).toHaveBeenCalled()
      })
      it('adds non-focus class', () => {
        wrapper.setState({ focus: true });
        wrapper.find('div.search-bar').simulate('blur')
        expect(wrapper.find('div.non-focus')).toHaveLength(1);
      });
    });
  });
});
