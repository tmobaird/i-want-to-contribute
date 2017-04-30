import React, { PropTypes } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MapMarkerList from './MapMarkerList';
import './styles/leaflet-container.css';

export default class ContributorsMap extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      locations: PropTypes.array
    })
  }
  static defaultProps = {
    data: {
      locations: []
    }
  }

  render() {
    return (
      <div className='contributors-map leaflet-container'>
        <Map center={[37.4316, -78.6569]} zoom={2}>
          <TileLayer
            attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
          />
          <MapMarkerList locations={this.props.data.locations} />
        </Map>
      </div>
    );
  }
}
