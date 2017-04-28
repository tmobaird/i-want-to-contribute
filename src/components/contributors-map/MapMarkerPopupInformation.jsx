import React, { PropTypes } from 'react';
import ContributorList from './ContributorList.jsx';

const MapMarkerPopupInformation = (props) => {
  const location = props.location;

  return (
    <div className="map-marker-popup-information">
      <h5 style={{marginBottom: "5px"}}>{ location.name }</h5>
      <hr style={{marginBottom: "0px", marginTop: "0px"}} />
      <ContributorList contributors={location.contributors} />
    </div>
  );
}

MapMarkerPopupInformation.propTypes = {
  location: PropTypes.object.isRequired
}

export default MapMarkerPopupInformation;
