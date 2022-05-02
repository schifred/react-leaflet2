import React, { Fragment } from 'react';
import { Map, TileLayer, ControlLayers, latLng } from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

export default () => {
  return (
    <Fragment>
      <Map center={latLng(57.72, 11.945)} zoom={14} style={{ width: '100%', height: 400 }}>
        <ControlLayers>
          <ControlLayers.ControlLayer name="Grayscale" checked>
            <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
          </ControlLayers.ControlLayer>
          <ControlLayers.ControlLayer name="Streets">
            <TileLayer url={MB_URL} attribution={MB_ATTR} id="streets-v11" />
          </ControlLayers.ControlLayer>
          <ControlLayers.ControlLayer name="Satellite">
            <TileLayer url={MB_URL} attribution={MB_ATTR} id="satellite-v9" />
          </ControlLayers.ControlLayer>
        </ControlLayers>
      </Map>
    </Fragment>
  );
};
