import React, { Fragment } from 'react';
import { Map, TileLayer, latLng, GeoJson } from 'react-leaflet2';
import geojson from './geojsons/us.json';
import data from './geojsons/censusdata.json';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const Colors = ['#eff3ff', '#bdd7e7', '#6baed6', '#3182bd', '#08519c'];
const variable = 'B06011002 - Born in state of residence';
let max: undefined | number = undefined;
let min: undefined | number = undefined;

data.forEach((item) => {
  if (!max || item[variable] > max) max = item[variable];
  if (!min || item[variable] < min) min = item[variable];
});

export default () => {
  return (
    <Fragment>
      <Map center={latLng(40, -96)} zoom={4} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <GeoJson.GeoJsonGroup
          geojson={geojson}
          onMounted={(geojsonLayer) => {
            geojsonLayer.eachLayer((layer) => {
              const { name } = layer.feature.properties;
              const found = data.find((it) => it.name === name)!;
              const division = Math.floor(
                ((Colors.length - 1) * (found?.[variable] - min!)) / (max! - min!),
              );

              layer.setStyle({
                fillColor: Colors[division],
                fillOpacity: 0.8,
                weight: 0.5,
              });
            });
          }}
        />
      </Map>
    </Fragment>
  );
};
