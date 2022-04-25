import React, { Fragment } from 'react';
import { DivIcon, featureGroup, Point } from 'leaflet';
import {
  Map,
  WKT,
  TileLayer,
  latLng,
  DrawPlayground,
  getCenter,
  getArea,
  getWkt,
} from 'react-leaflet-map';
import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(30.271486, 120.160136);

const wkt =
  'POLYGON((120.1161003112793 30.30691909894813,120.12451171875 30.30709076032508,120.11833190917969 30.301082612131722,120.1161003112793 30.30691909894813))';

const draw = {
  polygon: {
    allowIntersection: false,
    showArea: true,
    metric: ['km', 'm'],
    precision: {
      m: 2,
      km: 8,
    },
    touchIcon: new DivIcon({
      iconSize: new Point(10, 10),
      className: 'leaflet-div-icon leaflet-editing-icon leaflet-touch-icon',
    }),
  },
  polyline: false,
  circle: false,
  rectangle: false,
  marker: false,
  circlemarker: false,
};

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={14} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <DrawPlayground
          draw={draw}
          onChange={(e, featureGroup) => {
            console.log(getCenter(featureGroup));
            console.log(getArea(featureGroup));
            console.log(getWkt(featureGroup));
          }}
        >
          <WKT wkt={wkt} fit></WKT>
        </DrawPlayground>
      </Map>
    </Fragment>
  );
};
