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
    type: 'MultiPolygon',
    coordinates: [
      [
        [
          [120.1161003112793, 30.306919098948136],
          [120.12451171875, 30.307090760325089],
          [120.11833190917969, 30.301082612131722],
          [120.1161003112793, 30.30691909894813],
        ],
      ],
      [
        [
          [120.1131003112793, 30.30591909894813],
          [120.12451171875, 30.30709076032508],
          [120.11833190917969, 30.301082612131722],
          [120.1131003112793, 30.30691909894813],
        ],
      ],
    ],
  },
};

export default () => {
  return (
    <Fragment>
      <Map center={latLng(30.271486, 120.160136)} zoom={14} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <GeoJson geojson={geojson} fit></GeoJson>
      </Map>
    </Fragment>
  );
};
