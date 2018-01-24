// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import NavigationBar from './NavigationBar';
import { MemoryRouter } from 'react-router-dom';
import {shallow} from "enzyme";

describe('NavigationBar', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
          <NavigationBar status={0}/>
        </MemoryRouter>
        , div
    );
  });

  it('renders a status dot', () => {
    const subject = shallow(<NavigationBar status={1}/>);
    expect(subject.find('StatusDot').length).toEqual(1);
  });
});
