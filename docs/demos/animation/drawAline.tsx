import React, { useState, useRef, useCallback, Fragment, useEffect } from 'react';
import { Leaflet, Map, TileLayer, Polyline, latLng } from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

export default () => {
  const mapRef = useRef<{ map: Leaflet.Map }>();
  const [latlngs, setLatlngs] = useState<Leaflet.LatLng[]>([]);
  const pointsAddedRef = useRef(0);

  const tick = useCallback(() => {
    setLatlngs((latlngs) => [
      ...latlngs,
      latLng(Math.cos(pointsAddedRef.current / 20) * 30, pointsAddedRef.current),
    ]);

    // mapRef.current?.map?.setView([0, pointsAddedRef.current], 3);
    pointsAddedRef.current += 1;

    if (pointsAddedRef.current < 360) window.setTimeout(tick, 100);
  }, [mapRef, latlngs, pointsAddedRef]);

  useEffect(() => {
    tick();
  }, []);

  return (
    <Fragment>
      <Map center={latLng(0, 0)} zoom={3} style={{ width: '100%', height: 400 }} ref={mapRef}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
        <Polyline latlngs={latlngs} />
      </Map>
    </Fragment>
  );
};
