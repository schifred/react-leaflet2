import React, { Fragment } from 'react';
import { Map, TileLayer, Layer, latLng } from 'react-leaflet2';
import omnivore from '@mapbox/leaflet-omnivore';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(0, -80);

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={8} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
        <Layer layer={omnivore.wkt.parse('POINT(-80 0)')} />
      </Map>
    </Fragment>
  );
};
