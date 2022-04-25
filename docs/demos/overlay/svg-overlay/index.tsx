import React, { Fragment } from 'react';
import { Map, TileLayer, latLng, SvgOverlay } from 'react-leaflet-map';
import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(-0.09, 51.505);

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={14} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <SvgOverlay
          bounds={[
            [51.49, -0.08],
            [51.5, -0.06],
          ]}
          fit
        >
          <rect x="0" y="0" width="100%" height="100%" fill="blue" />
          <circle r="5" cx="10" cy="10" fill="red" />
          <text x="50%" y="50%" stroke="white">
            text
          </text>
        </SvgOverlay>
      </Map>
    </Fragment>
  );
};
