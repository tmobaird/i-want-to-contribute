import React, { PropTypes } from 'react';
import ContributorList from './ContributorList.jsx';
import './styles/map-marker-popup-information.css';

const MapMarkerPopupInformation = (props) => {
  const location = props.location;

  return (
    <div className="map-marker-popup-information">
      <h5>{ location.name }</h5>
      <hr />
      <ContributorList contributors={location.contributors} />
    </div>
  );
}

MapMarkerPopupInformation.propTypes = {
  location: PropTypes.object.isRequired
}

export default MapMarkerPopupInformation;
