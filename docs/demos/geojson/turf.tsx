import React, { useMemo, Fragment } from 'react';
import { Leaflet, Map, TileLayer, latLng, GeoJson, Marker } from 'react-leaflet2';
import { concave } from '@turf/turf';
import geojson from './geojsons/sf_locations.json';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(37.77396, -122.4366);

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={13} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <GeoJson.GeoJsonGroup geojson={geojson} />
        <GeoJson.GeoJsonGroup geojson={concave(geojson, 3, 'miles')} />
      </Map>
    </Fragment>
  );
};
