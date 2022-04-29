import React, { useState, useRef, useCallback, Fragment, useEffect } from 'react';
import { Map, TileLayer, GeoJson, Marker, latLng } from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const geojson = { type: 'LineString', coordinates: [] };
let start = [10, 20];
const momentum = [3, 3];

for (let i = 0; i < 300; i++) {
  start[0] += momentum[0];
  start[1] += momentum[1];
  if (start[1] > 60 || start[1] < -60) momentum[1] *= -1;
  if (start[0] > 170 || start[0] < -170) momentum[0] *= -1;
  geojson.coordinates.push(start.slice());
}

export default () => {
  const [latlng, setLatlng] = useState();
  let currentRef = useRef(0);

  const tick = useCallback(() => {
    setLatlng(
      latLng(
        geojson.coordinates[currentRef.current][1],
        geojson.coordinates[currentRef.current][0],
      ),
    );

    currentRef.current += 1;
    if (currentRef.current < geojson.coordinates.length) setTimeout(tick, 100);
  }, [currentRef]);

  useEffect(() => {
    tick();
  }, []);

  return (
    <Fragment>
      <Map center={latLng(0, 0)} zoom={1} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
        <GeoJson.GeoJsonGroup geojson={geojson} />
        <Marker latlng={latlng} />
      </Map>
    </Fragment>
  );
};
