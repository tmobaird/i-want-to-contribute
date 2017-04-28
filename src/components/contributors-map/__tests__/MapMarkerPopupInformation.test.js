import React from 'react';
import { shallow } from 'enzyme';
import MapMarkerPopupInformation from '../MapMarkerPopupInformation';

describe('MapMarkerPopupInformation', () => {
  describe('when no location prop exists', () => {
    it('raises error when rendering', () => {
      expect(() => {
        shallow(<MapMarkerPopupInformation />);
      }).toThrow();
    });
  });
  describe('with props', () => {
    const location = {
      "name": "Virginia",
      "latitude": 37.4316,
      "longitude": -78.6569,
      "contributors": []
    }
    const wrapper = shallow(<MapMarkerPopupInformation location={location} />);

    it('renders (using exists())', () => {
      expect(wrapper.find("div.map-marker-popup-information").exists()).toBe(true);
    });
    it('displays name', () => {
      expect(wrapper.find("h5").text()).toEqual("Virginia");
    });
    it('includes ContributorList', () => {
      expect(wrapper.find("ContributorList")).toHaveLength(1);
    });
  });
});
