import React from 'react';
import { shallow } from 'enzyme';
import MapMarker from '../MapMarker';

describe('MapMarker', () => {
  describe('props validation', () => {
    describe('when no location prop exists', () => {
      it('raises error when rendering', () => {
        expect(() => {
          shallow(<MapMarker />);
        }).toThrow();
      });
    });
  });
  describe('with props', () => {
    const location = {
      name: "Virginia",
      latitude: 1234,
      longitude: 5678
    }
    const wrapper = shallow(<MapMarker location={location} />);

    it('renders Marker', () => {
      expect(wrapper.find("Marker")).toHaveLength(1);
    });
    it('renders Popup', () => {
      expect(wrapper.find("Popup")).toHaveLength(1);
    });
    it('renders MapMarkerPopupInformation', () => {
      expect(wrapper.find("MapMarkerPopupInformation")).toHaveLength(1);
    });
  });
});
