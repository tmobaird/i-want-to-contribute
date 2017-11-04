import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import MapMarker from '../MapMarker';

describe('MapMarker', () => {
  describe('props validation', () => {
    describe('when no location prop exists', () => {
      it('raises error when rendering', () => {
        // stubs console.error to prevent rendering in the terminal
        const stub = sinon.stub(console, 'error');

        expect(() => {
          shallow(<MapMarker />);
        }).toThrow(new TypeError("Cannot read property 'latitude' of undefined"));
        expect(stub.calledOnce).toEqual(true);

        console.error.restore();
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
