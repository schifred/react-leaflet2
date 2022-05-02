import React, { Fragment } from 'react';
import { Map, TileLayer, GeoJson, latLng } from 'react-leaflet2';
import { statesData } from './geojsons/usStates';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(32.7872, -86.6381);

const state = statesData.features[0];
state.geometry.coordinates = [
  // the world
  [
    [-180, -90],
    [-180, 90],
    [180, 90],
    [180, -90],
    [-180, -90],
  ],
  // the state
  state.geometry.coordinates[0],
];

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={6} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <GeoJson.GeoJsonGroup geojson={state} fillOpacity={1} fillColor="#fff" weight={0} />
      </Map>
    </Fragment>
  );
};
