import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import SearchForm from './SearchForm';

describe('renders', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SearchForm />, div);
  });
  it('calls onSubmit function on form submit', () => {
    const mockFn = jest.fn();
    const wrapper = shallow(<SearchForm onSubmit={mockFn} />);
    wrapper.find('form').simulate('submit', { preventDefault() {} })
    expect(mockFn).toHaveBeenCalled();
  });
  it('includes SearchBar', () => {
    const wrapper = shallow(<SearchForm  />);
    expect(wrapper.find('SearchBar')).toHaveLength(1);
  });
  describe('handleChange', () => {
    const wrapper = shallow(<SearchForm  />);
    wrapper.instance().handleChange({ target: { value: 'test' } })
    expect(wrapper.state().value).toEqual('test');
  });
});
