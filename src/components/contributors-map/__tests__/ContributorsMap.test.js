import React from 'react';
import { shallow } from 'enzyme';
import ContributorsMap from '../ContributorsMap';

describe('ContributorsMap', () => {
  describe('without props', () => {
    const wrapper = shallow(<ContributorsMap />);
    it('renders MapMarkerList with location == []', () => {
      expect(wrapper.find("MapMarkerList").props().locations).toEqual([]);
    });
  });
  describe('render', () => {
    const data = {
      locations: [
        { "name": "Virginia" }
      ]
    }
    const wrapper = shallow(<ContributorsMap data={data} />);

    it('renders div with classes contributors-map and leaflet-container', () => {
      expect(wrapper.find("div.contributors-map.leaflet-container")).toHaveLength(1);
    });
    it('renders Map', () => {
      expect(wrapper.find("Map")).toHaveLength(1);
    });
    it('renders Map with props center==[37.4316, -78.6569]', () => {
      expect(wrapper.find("Map").props().center).toEqual([37.4316, -78.6569]);
    });
    it('renders TileLayer', () => {
      expect(wrapper.find("TileLayer")).toHaveLength(1);
    });
    it('renders MapMarkerList', () => {
      expect(wrapper.find("MapMarkerList")).toHaveLength(1);
    });
    it('renders MapMarkerList with locations==[{"name": "Virginia"}]', () => {
      expect(wrapper.find("MapMarkerList").props().locations).toEqual([
        { "name": "Virginia" }
      ]);
    });
  });
});
