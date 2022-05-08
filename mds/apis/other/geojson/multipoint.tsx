import React, { Fragment } from 'react';
import { Map, GeoJson, TileLayer, latLng } from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const geojson = {
  type: 'Feature',
  geometry: {
    type: 'MultiPoint',
    coordinates: [
      [120.160136, 30.271486],
      [120.12451, 30.30709],
    ],
  },
};

export default () => {
  return (
    <Fragment>
      <Map center={latLng(30.271486, 120.160136)} zoom={12} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <GeoJson geojson={geojson} fit></GeoJson>
      </Map>
    </Fragment>
  );
};
