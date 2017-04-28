import React from 'react';
import { shallow } from 'enzyme';
import MapMarkerList from '../MapMarkerList';

describe('MapMarkerList', () => {
  describe('without props', () => {
    const wrapper = shallow(<MapMarkerList />);
    it('renders', () => {
      expect(wrapper.find("div.map-marker-list").exists()).toBe(true);
    });
    it('includes 0 MapMarkers', () => {
      expect(wrapper.find("MapMarker")).toHaveLength(0);
    });
  });
  describe('list items', () => {
    describe('when no locations exist', () => {
      it('renders 0 MapMarkers', () => {
        const wrapper = shallow(<MapMarkerList locations={[]} />);
        expect(wrapper.find("MapMarker")).toHaveLength(0);
      });
    });
    describe('when one location exists', () => {
      it('renders 1 MapMarker', () => {
        const locations = [
          {
            "name": "Virginia",
            "latitude": 37.4316,
            "longitude": -78.6569,
            "contributors": []
          }
        ]
        const wrapper = shallow(<MapMarkerList locations={locations} />);
        expect(wrapper.find("MapMarker")).toHaveLength(1);
      });
    });
    describe('when multiple locations exist', () => {
      it('renders 2 MapMarkers', () => {
        const locations = [
          {
            "name": "Virginia",
            "latitude": 37.4316,
            "longitude": -78.6569,
            "contributors": []
          },
          {
            "name": "California",
            "latitude": 37.4316,
            "longitude": -78.6569,
            "contributors": []
          },
        ]
        const wrapper = shallow(<MapMarkerList locations={locations} />);
        expect(wrapper.find("MapMarker")).toHaveLength(2);
      });
    });
  });
  describe('MapMarker position props', () => {
    it('includes location', () => {
      const locations = [
        {
          "name": "Virginia",
          "latitude": 37.4316,
          "longitude": -78.6569,
          "contributors": []
        }
      ]
      const wrapper = shallow(<MapMarkerList locations={locations} />);
      expect(wrapper.find("MapMarker").props().location).toEqual(locations[0]);
    })
  });
});
