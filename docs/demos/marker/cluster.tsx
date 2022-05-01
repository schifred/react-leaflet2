import React, { useMemo, Fragment } from 'react';
import { Leaflet, Map, TileLayer, latLng, MarkerCluster, Marker } from 'react-leaflet2';
import geojson from './geojsons/stations.json';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(38.9, -77);

export default () => {
  const markers = useMemo(() => {
    const result: Leaflet.Layer[] = [];
    const geojsonGroupLayer = Leaflet.geoJSON(geojson);
    geojsonGroupLayer.eachLayer(function (layer) {
      result.push(layer);
    });
    return result as Leaflet.Marker[];
  }, []);

  return (
    <Fragment>
      <Map center={position} zoom={13} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <MarkerCluster>
          {markers.map((marker: Leaflet.Marker) => {
            return <Marker key={marker.getLatLng().toString()} marker={marker} />;
          })}
        </MarkerCluster>
      </Map>
    </Fragment>
  );
};
