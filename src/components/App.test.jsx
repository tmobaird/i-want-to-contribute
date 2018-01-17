import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MemoryRouter } from 'react-router-dom';
import {mount, shallow} from 'enzyme';
import * as sinon from 'sinon';
import {noop} from "../utils/noop";

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <MemoryRouter>
          <App fetchStatus={noop} />
        </MemoryRouter>, div);
  });
  it('renders StatusFavicon', () => {
    const subject = shallow(<App fetchStatus={noop} />);
    expect(subject.find('StatusFavicon').length).toBeGreaterThan(0)
  });
  it('calls fetch status on mount', async () => {
    const spy = sinon.spy();
    await mount(<MemoryRouter><App fetchStatus={spy} /></MemoryRouter>);
    expect(spy.getCalls().length).toEqual(1);
  });
  it('sets backendStatus state to true', async () => {
    const stub = sinon.stub();
    stub.resolves();

    const subject = shallow(<App fetchStatus={stub} />);
    await subject.instance().componentDidMount();

    expect(subject.state().backendStatus).toBeTruthy();
  });
  describe('when fetchStatus rejects', () => {
    it('sets backendStatus to false', async () => {
      const stub = sinon.stub();
      stub.rejects();

      const subject = shallow(<App fetchStatus={stub}/>);
      await subject.instance().componentDidMount();

      expect(subject.state().backendStatus).toEqual(-1);
    });
  });
});
