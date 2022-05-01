import React, { Fragment } from 'react';
import { Map, TileLayer, Control, Leaflet, latLng } from 'react-leaflet2';
import MiniMap from 'leaflet-minimap';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;
const MINIMAP_URL =
  'https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=' +
  ACCESS_TOKEN;

const minimap = new MiniMap(Leaflet.tileLayer(MINIMAP_URL));

export default () => {
  return (
    <Fragment>
      <Map center={latLng(57.72, 11.945)} zoom={14} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <Control createControl={() => minimap} />
      </Map>
    </Fragment>
  );
};
