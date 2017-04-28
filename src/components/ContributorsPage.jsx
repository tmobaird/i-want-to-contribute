import React from 'react';
import ContributorsMap from './contributors-map/ContributorsMap';
import contributorsByLocation from '../utils/contributors.json';

export default class ContributorsPage extends React.Component {
  render() {
    return (
      <div className='contributors-page'>
        <h3 className="text-center">We welcome contributions from developers all around the world. Here's a look at some of the places our contributors are from.</h3>
        <div className="text-center"><i><small>* The following locations on the map are not exact locations. They are rounded locations to states and sometimes cities.</small></i></div>
        <ContributorsMap data={contributorsByLocation} />
      </div>
    );
  }
}
