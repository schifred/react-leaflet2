import React, { useState, Fragment } from 'react';
import { Map, TileLayer, latLng, Marker, Popup, LatLng, Tooltip } from 'react-leaflet-map';
import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(30.271486, 120.160136);

// https://github.com/pointhi/leaflet-color-markers
const icon = new Marker.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default () => {
  const [latlng, setLatlng] = useState<LatLng>();

  return (
    <Fragment>
      <Map
        center={position}
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
            icon={icon}
            onAdd={() => {
              console.log(111);
            }}
          >
            <Tooltip visible>
              <div>11234</div>
            </Tooltip>
          </Marker>
        )}
      </Map>
    </Fragment>
  );
};
