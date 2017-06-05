import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import { SearchPage } from './SearchPage';

describe('SearchPage Container', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <SearchPage
        search={{}}
        results={{}}
        actions={{}}
        location={{search: ''}}
      />
    );
  });

  it('display AppInfo component if search is not active', () => {
    const wrapper = shallow(
      <SearchPage
        search={{ submitted: false }}
        results={{}}
        actions={{}}
        location={{search: ''}}
      />
    );

    expect(wrapper.find('AppInfo').exists()).toBe(true);
  });

  it('displays SearchResultsBox component if search is active', () => {
    const wrapper = shallow(
      <SearchPage
        search={{ submitted: true }}
        results={{}}
        actions={{}}
        location={{search: ''}}
      />
    );

    expect(wrapper.find('SearchResultsBox').exists()).toBe(true);
    expect(wrapper.find('AppInfo').exists()).toBe(false);
  });

  describe('ComponentDidMount', () => {
    it('calls submitSearch if url search query is present', () => {
      const submitSearch = sinon.spy()

      const wrapper = mount(
        <SearchPage
          search={{}}
          results={{}}
          actions={{ submitSearch }}
          location={{search: 'q=react'}}
          history={{action: 'POP'}}
        />
      )

      expect(submitSearch.called).toBe(true)
    })

    it('does not call submitSearch if url search query is empty', () => {
      const submitSearch = sinon.spy()

      const wrapper = mount(
        <SearchPage
          search={{}}
          results={{}}
          actions={{ submitSearch }}
          location={{search: ''}}
          history={{action: 'POP'}}
        />
      )

      expect(submitSearch.called).toBe(false)
    })

    it('calls resetSearch if router history action is PUSH', () => {
      const resetSearch = sinon.spy()

      const wrapper = mount(
        <SearchPage
          search={{}}
          results={{}}
          actions={{ resetSearch }}
          location={{search: ''}}
          history={{action: 'PUSH'}}
        />
      )

      expect(resetSearch.called).toBe(true)
    })

    it('does not call resetSearch if router history action is PUSH', () => {
      const resetSearch = sinon.spy()

      const wrapper = mount(
        <SearchPage
          search={{}}
          results={{}}
          actions={{ resetSearch }}
          location={{search: ''}}
          history={{action: 'POP'}}
        />
      )

      expect(resetSearch.called).toBe(false)
    })
  })
  describe('componentDidUpdate', () => {
    it('calls resetSearch on nextProps', () => {
      const resetSearch = sinon.spy()

      const wrapper = mount(
        <SearchPage
          search={{}}
          results={{}}
          actions={{ resetSearch, submitSearch: () => {} }}
          location={{search: 'q=react'}}
          history={{action: 'POP'}}
        />
      )

      expect(resetSearch.called).toBe(false)

      wrapper.setProps({ location: { search: '' }})

      expect(resetSearch.called).toBe(true);
    })

    it(' does not call resetSearch on nextProps', () => {
      const resetSearch = sinon.spy()

      const wrapper = mount(
        <SearchPage
          search={{}}
          results={{}}
          actions={{ resetSearch, submitSearch: () => {} }}
          location={{search: 'q=react'}}
          history={{action: 'POP'}}
        />
      )

      expect(resetSearch.called).toBe(false)

      wrapper.setProps({search: 'q=react'})

      expect(resetSearch.called).toBe(false);
    })
  })
})
