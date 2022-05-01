import React, { Fragment } from 'react';
import { Position, Tooltip, latLng } from 'react-leaflet2';
import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(30.271486, 120.160136);

export default () => {
  return (
    <Fragment>
      <Position
        center={position}
        zoom={14}
        controls={['zoom', 'scale', 'fullscreen', 'attribution', 'search']}
        style={{ width: '100%', height: 400 }}
        tileLayers={[
          {
            url: MB_URL,
            attribution: MB_ATTR,
            id: 'light-v9',
          },
        ]}
        onChange={(data) => {
          console.log(data);
        }}
      >
        <Tooltip visible>
          <div>11234</div>
        </Tooltip>
      </Position>
    </Fragment>
  );
};
