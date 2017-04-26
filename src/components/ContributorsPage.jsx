import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import '../styles/leaflet-map.css';

export default class ContributorsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 37.4316,
      lng: -78.6569,
      zoom: 2
    }
  }

  render() {
    const position = [this.state.lat, this.state.lng];

    return (
      <div>
        <h3 className="text-center">We welcome contributions from developer all around the world. Take a look at some of the places our contributors are from.</h3>
        <div className="text-center"><i><small>* The following locations on the map are not exact locations. They are rounded locations to states and sometimes cities.</small></i></div>
        <div className='leaflet-container'>
          <Map center={position} zoom={this.state.zoom}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                <div>
                  <h5>Contributors</h5>
                  <ul>
                    <li>Thomas Baird</li>
                    <li>David Shrestha</li>
                  </ul>
                </div>
              </Popup>
            </Marker>
            <Marker position={[36.7783, -119.4179]}>
              <Popup>
                <div>
                  <h5>Contributors</h5>
                  <ul>
                    <li>Devin Osorio</li>
                  </ul>
                </div>
              </Popup>
            </Marker>
            <Marker position={[40.7128, -74.0059]}>
              <Popup>
                <div>
                  <h5>Contributors</h5>
                  <ul>
                    <li>Adam Freemer</li>
                  </ul>
                </div>
              </Popup>
            </Marker>
          </Map>
        </div>
      </div>
    );
  }
}
