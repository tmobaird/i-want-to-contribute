// @flow
import * as React from 'react';
import StatusFavicon from "./StatusFavicon";
import {shallow} from "enzyme";

describe(`StatusFavicon`, () => {
  it('renders Favicon', () => {
    const subject = shallow(<StatusFavicon status={false}/>);
    expect(subject.find('Favicon').length).toEqual(1);
  });
  describe('when status is undefined', () => {
    it('returns null', () => {
      const subject = shallow(<StatusFavicon/>);
      expect(subject.node).toBeNull();
    });
  });
  describe('when status === false', () => {
    it('renders failed favicon', () => {
      const subject = shallow(<StatusFavicon status={false}/>);
      expect(subject.find('Favicon').prop('url')).toEqual('favicon-failure.ico');
    });
  });
  describe('when status === true', () => {
    it('renders successful favicon', () => {
      const subject = shallow(<StatusFavicon status={true}/>);
      expect(subject.find('Favicon').prop('url')).toEqual('favicon-success.ico');
    });
  });
});
