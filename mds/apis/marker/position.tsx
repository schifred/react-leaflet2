import React, { useState, Fragment } from 'react';
import { Leaflet, Map, TileLayer, latLng, Marker } from 'react-leaflet2';
import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

export default () => {
  const [latlng, setLatlng] = useState<Leaflet.LatLng>();

  return (
    <Fragment>
      <Map
        center={latLng(30.271486, 120.160136)}
        zoom={14}
        style={{ width: '100%', height: 400 }}
        onClick={(e) => {
          setLatlng(e.latlng);
        }}
      >
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        {latlng && (
          <Marker
            latlng={latlng}
            onAdd={() => {
              console.log(111);
            }}
          />
        )}
      </Map>
    </Fragment>
  );
};
