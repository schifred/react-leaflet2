import React, { useRef, Fragment } from 'react';
import Leaflet, { Map, TileLayer, Marker, latLng } from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

export default () => {
  const mapRef = useRef<Leaflet.Map>();

  return (
    <Fragment>
      <Map
        center={latLng(37.77396, -122.4366)}
        zoom={13}
        style={{ width: '100%', height: 400 }}
        ref={mapRef}
      >
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
        <Marker
          latlng={latLng(37.75091740997017, -122.418157211908)}
          onClick={(e) => {
            mapRef.current!.map.panTo(e.latlng);
          }}
        />
      </Map>
    </Fragment>
  );
};
