import React, { PropTypes } from 'react';
import MapMarker from './MapMarker';

const MapMarkerList = (props) => {
  const markers = props.locations.map((location,iter) => {
    return <MapMarker key={iter} location={location} />;
  });

  return (
    <div className="map-marker-list">
      { markers }
    </div>
  );
}

MapMarkerList.propTypes = {
  locations: PropTypes.array
}

MapMarkerList.defaultProps = {
  locations: []
}

export default MapMarkerList;
