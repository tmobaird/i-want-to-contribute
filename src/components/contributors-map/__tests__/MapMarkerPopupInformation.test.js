import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import MapMarkerPopupInformation from '../MapMarkerPopupInformation';

describe('MapMarkerPopupInformation', () => {
  describe('when no location prop exists', () => {
    it('raises error when rendering', () => {
      // stubs console.error to prevent rendering in the terminal
      const stub = sinon.stub(console, 'error');

      expect(() => {
        shallow(<MapMarkerPopupInformation />);
      }).toThrow(new TypeError("Cannot read property 'name' of undefined"));
      expect(stub.calledOnce).toEqual(true);

      console.error.restore();
    });
  });
  describe('with props', () => {
    const location = {
      "name": "Virginia",
      "emoji": "test_emoji",
      "latitude": 37.4316,
      "longitude": -78.6569,
      "contributors": []
    }
    const wrapper = shallow(<MapMarkerPopupInformation location={location} />);

    it('renders (using exists())', () => {
      expect(wrapper.find("div.map-marker-popup-information").exists()).toBe(true);
    });
    it('displays name', () => {
      expect(wrapper.find("span.location-name").text()).toEqual("Virginia ");
    });
    it('includes emojify', () => {
      expect(wrapper.find("Emojify")).toHaveLength(1);
    });
    it('displays emoji', () => {
      const emojiContainer = wrapper.find("Emojify");
      expect(emojiContainer.contains(<span>:test_emoji:</span>)).toBe(true);
    });
    it('includes ContributorList', () => {
      expect(wrapper.find("ContributorList")).toHaveLength(1);
    });
  });
});
