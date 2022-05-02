import React, { Fragment } from 'react';
import { Polygons, WKT, latLng } from 'react-leaflet2';
import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const wkt =
  'POLYGON((120.1161003112793 30.30691909894813,120.12451171875 30.30709076032508,120.11833190917969 30.301082612131722,120.1161003112793 30.30691909894813))';

export default () => {
  return (
    <Fragment>
      <Polygons
        center={latLng(40, 40)}
        zoom={3}
        style={{ width: '100%', height: 400 }}
        controls={['zoom', 'scale', 'fullscreen', 'attribution', 'search']}
        tileLayers={[
          {
            url: MB_URL,
            attribution: MB_ATTR,
            id: 'light-v9',
          },
        ]}
        ploygons={[
          {
            wkt: 'MULTIPOLYGON (((40 40, 20 45, 45 30, 40 40)), ((20 35, 45 20, 30 5, 10 10, 10 30, 20 35), (30 20, 20 25, 20 15, 30 20)))',
          },
        ]}
        getKey={(polygon) => polygon.wkt}
      />
    </Fragment>
  );
};
