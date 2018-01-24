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
    it('includes tooltip with failure status', () => {
      const subject = shallow(<StatusDot status={-1}/>);
      const tooltipContent = subject.find('OverlayTrigger').props().overlay.props.children;
      expect(tooltipContent).toEqual('Sorry. We are currently experiencing outages. Some features may not work because of this.');
    });
  });
  describe('when status is == 0', () => {
    it('displays orange dot', () => {
      const subject = shallow(<StatusDot status={0}/>);
      expect(subject.find('div').props().style.backgroundColor).toEqual(yellow);
    });
    it('displays checking... status message', () => {
      const subject = shallow(<StatusDot status={0}/>);
      const tooltipContent = subject.find('OverlayTrigger').props().overlay.props.children;
      expect(tooltipContent).toEqual('Checking status...');
    });
  });
  describe('when status is > 0', () => {
    it('displays green dot', () => {
      const subject = shallow(<StatusDot status={1}/>);
      expect(subject.find('div').props().style.backgroundColor).toEqual(green);
    })
    it('displays all systems operational status message', () => {
      const subject = shallow(<StatusDot status={1}/>);
      const tooltipContent = subject.find('OverlayTrigger').props().overlay.props.children;
      expect(tooltipContent).toEqual('All systems operational');
    });
  });
});
