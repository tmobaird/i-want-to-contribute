import React from 'react';
import { shallow } from 'enzyme';
import SearchResultsBox from './SearchResultsBox';

describe('SearchResultsBox', () => {
  it('renders loading screen when fetching', () => {
    const wrapper = shallow(<SearchResultsBox fetchingInProgress />);
    
    expect(wrapper.find('center').exists()).toEqual(true);
  });

  it('renders message if no results', () => {
    const wrapper = shallow(<SearchResultsBox results={{}} />);
    expect(wrapper.contains([
      <h4>{"No results were found, make sure the repo you're looking for exists and is spelled correctly."}</h4>,
    ])).toEqual(true);
    expect(wrapper.find('SearchResultsList').exists()).toEqual(false);
    expect(wrapper.find('center').exists()).toEqual(false);
  });

    it('renders SearchResultsList if results', () => {
      const wrapper = shallow(<SearchResultsBox results={{
        1234: {},
        1223: {},
      }} />);
    
    expect(wrapper.find('SearchResultsList').exists()).toEqual(true);
    expect(wrapper.contains([
      <h4>{"No results were found, make sure the repo you're looking for exists and is spelled correctly."}</h4>,
    ])).toEqual(false);
  });
});
