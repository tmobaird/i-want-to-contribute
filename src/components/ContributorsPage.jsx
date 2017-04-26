import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import contributorsByLocation from '../utils/contributors.json';
import '../styles/leaflet-map.css';

export default class ContributorsPage extends React.Component {
  render() {
    const markers = contributorsByLocation.locations.map((location,iter) => {
      let position = [location.latitude, location.longitude];
      let contributors = location.contributors.map((c,iter) => {
        return (
          <li key={iter}>
            {c.name} (<a href={`http://github.com/${c.username}`}>{`@${c.username}`}</a>)
          </li>
        );
      });

      return (
        <Marker key={iter} position={position}>
          <Popup>
            <div>
              <h5 style={{marginBottom: "5px"}}>{ location.name }</h5>
              <hr style={{marginBottom: "0px", marginTop: "0px"}} />
              <ul style={{paddingLeft: "15px"}}>
                { contributors }
              </ul>
            </div>
          </Popup>
        </Marker>
      );
    });

    return (
      <div>
        <h3 className="text-center">We welcome contributions from developers all around the world. Here's a look at some of the places our contributors are from.</h3>
        <div className="text-center"><i><small>* The following locations on the map are not exact locations. They are rounded locations to states and sometimes cities.</small></i></div>
        <div className='leaflet-container'>
          <Map center={[37.4316, -78.6569]} zoom={2}>
            <TileLayer
              attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
              url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            { markers }
          </Map>
        </div>
      </div>
    );
  }
}
