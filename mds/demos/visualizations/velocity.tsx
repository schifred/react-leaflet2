import React, { Fragment } from 'react';
import { Leaflet, Map, ControlLayers, TileLayer, Layer, latLng } from 'react-leaflet2';
import 'leaflet-velocity';
import waterGbr from './geojsons/water-gbr.json';
import windGbr from './geojsons/wind-gbr.json';
import windGlobal from './geojsons/wind-global.json';

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
      <Map center={latLng(-22, 150)} zoom={5} style={{ width: '100%', height: 400 }}>
        <ControlLayers>
          <ControlLayers.ControlLayer name="Satellite" checked>
            <TileLayer url={MB_URL} attribution={MB_ATTR} id="satellite-v9" />
          </ControlLayers.ControlLayer>
          <ControlLayers.ControlLayer name="Grayscale">
            <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
          </ControlLayers.ControlLayer>

          <ControlLayers.ControlLayer name="Wind - Great Barrier Reef" overlay>
            <Layer
              layer={
                new Leaflet.velocityLayer({
                  displayValues: true,
                  displayOptions: {
                    velocityType: 'GBR Wind',
                    displayPosition: 'bottomleft',
                    displayEmptyString: 'No wind data',
                  },
                  data: windGbr,
                  maxVelocity: 10,
                })
              }
            />
          </ControlLayers.ControlLayer>
          <ControlLayers.ControlLayer name="Ocean Current - Great Barrier Reef" overlay>
            <Layer
              layer={
                new Leaflet.velocityLayer({
                  displayValues: true,
                  displayOptions: {
                    velocityType: 'GBR Water',
                    displayPosition: 'bottomleft',
                    displayEmptyString: 'No water data',
                  },
                  data: waterGbr,
                  maxVelocity: 0.6,
                  velocityScale: 0.1,
                })
              }
            />
          </ControlLayers.ControlLayer>
          <ControlLayers.ControlLayer name="Wind - Global" overlay>
            <Layer
              layer={
                new Leaflet.velocityLayer({
                  displayValues: true,
                  displayOptions: {
                    velocityType: 'Global Wind',
                    displayPosition: 'bottomleft',
                    displayEmptyString: 'No wind data',
                  },
                  data: windGlobal,
                  maxVelocity: 15,
                })
              }
            />
          </ControlLayers.ControlLayer>
        </ControlLayers>
      </Map>
    </Fragment>
  );
};
