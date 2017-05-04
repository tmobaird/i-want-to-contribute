import React, { PropTypes } from 'react';
import Emojify from 'react-emojione';
import ContributorList from './ContributorList.jsx';
import './styles/map-marker-popup-information.css';

const MapMarkerPopupInformation = (props) => {
  const location = props.location;

  return (
    <div className="map-marker-popup-information">
      <h5>
        <span className="location-name">{ `${location.name} ` }</span>
        <Emojify><span>{ `:${location.emoji}:` }</span></Emojify>
      </h5>
      <hr />
      <ContributorList contributors={location.contributors} />
    </div>
  );
}

MapMarkerPopupInformation.propTypes = {
  location: PropTypes.object.isRequired
}

export default MapMarkerPopupInformation;
