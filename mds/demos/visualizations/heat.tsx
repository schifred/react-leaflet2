import React, { Fragment } from 'react';
import { Leaflet, Map, TileLayer, latLng, Layer } from 'react-leaflet2';
import 'leaflet.heat';
import { addressPoints } from './geojsons/addressPoints';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(-37.87, 175.475);
export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={12} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <Layer
          layer={Leaflet.heatLayer(
            addressPoints.map((p) => [p[0], p[1]]),
            { radius: 25 },
          )}
        />
      </Map>
    </Fragment>
  );
};
