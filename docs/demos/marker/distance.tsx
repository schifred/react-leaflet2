import React, { useState, Fragment } from 'react';
import { Map, TileLayer, latLng, Marker, Polyline, LatLng } from 'react-leaflet2';
import 'leaflet/dist/leaflet.css';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

// https://github.com/pointhi/leaflet-color-markers
const icon = new Marker.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const fixedPosition = latLng(38.9131775, -77.032544);

export default () => {
  const [latlng, setLatlng] = useState<LatLng>();

  return (
    <Fragment>
      <div style={{ position: 'relative' }}>
        <Map
          center={latLng(38.9, -77)}
          zoom={12}
          style={{ width: '100%', height: 400 }}
          onClick={(e) => {
            setLatlng(e.latlng);
          }}
        >
          <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

          <Marker latlng={fixedPosition} icon={icon} />

          {latlng && (
            <Fragment>
              <Polyline latlngs={[fixedPosition, latlng]} color="#000" opacity={0.5} weight={4} />
              <Marker latlng={latlng} icon={icon} />
            </Fragment>
          )}
        </Map>

        <pre
          style={{
            position: 'absolute',
            bottom: '10px',
            left: '10px',
            padding: '5px 10px',
            background: 'rgba(0,0,0,0.5)',
            color: '#fff',
            fontSize: '11px',
            lineHeight: '18px',
            borderRadius: '3px',
            zIndex: 9999,
          }}
        >
          {latlng ? latlng?.distanceTo(fixedPosition).toFixed(0) + 'm' : '请点击添加一个标记点'}
        </pre>
      </div>
    </Fragment>
  );
};
