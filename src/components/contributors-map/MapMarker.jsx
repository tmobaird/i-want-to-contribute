import React, { PropTypes } from 'react';
import { Marker, Popup } from 'react-leaflet';
import MapMarkerPopupInformation from './MapMarkerPopupInformation';

const MapMarker = (props) => {
  const location = props.location;
  return (
    <Marker position={[location.latitude, location.longitude]}>
      <Popup>
        <MapMarkerPopupInformation location={location} />
      </Popup>
    </Marker>
  );
}

MapMarker.propTypes = {
  location: PropTypes.shape({
    name: PropTypes.string,
    latitude: PropTypes.number,
    longitude: PropTypes.number
  }).isRequired
}

export default MapMarker;
