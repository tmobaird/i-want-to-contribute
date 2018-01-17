import * as React from 'react';
import {shallow} from "enzyme";
import StatusDot from "./StatusDot";

const red = '#FF2020';
const green = '#1EEE17';
const yellow = '#FFDA20';

describe(`StatusDot`, () => {
  describe('when status is < 0', () => {
    it('displays red dot', () => {
      const subject = shallow(<StatusDot status={-1}/>);
      expect(subject.find('div').props().style.backgroundColor).toEqual(red);
    });
  });
  describe('when status is == 0', () => {
    it('displays orange dot', () => {
      const subject = shallow(<StatusDot status={0}/>);
      expect(subject.find('div').props().style.backgroundColor).toEqual(yellow);
    });
  });
  describe('when status is > 0', () => {
    it('displays green dot', () => {
      const subject = shallow(<StatusDot status={1}/>);
      expect(subject.find('div').props().style.backgroundColor).toEqual(green);
    });
  });
});
