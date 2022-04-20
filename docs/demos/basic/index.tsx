import React, { Fragment } from 'react';
import { Icon } from 'leaflet';
// import {MapContainer,TileLayer,Marker,Popup} from 'react-leaflet';
import {
  Map,
  GeoJSON,
  WKT,
  TileLayer,
  Marker,
  ControlLayers,
  latLng,
  convertWkt2GeoObject,
} from 'chaos-react-leaflet';
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
const icon = new Icon({
  // 临时性直接使用选中的摄像头图标
  iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
const wkt =
  'POLYGON((120.1161003112793 30.30691909894813,120.12451171875 30.30709076032508,120.11833190917969 30.301082612131722,120.1161003112793 30.30691909894813))';
const geojson = convertWkt2GeoObject(wkt);
console.log(geojson);

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={14} style={{ width: '100%', height: 400 }}>
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

        {/* <GeoJSON geojson={geojson}></GeoJSON> */}
        <WKT wkt={wkt} fit />

        <Marker latlng={position} icon={icon} />
      </Map>

      {/* <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width: '100%', height: 400}}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer> */}
    </Fragment>
  );
};
