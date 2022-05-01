import React, { useMemo, Fragment } from 'react';
import { Leaflet, Map, TileLayer, Polyline, latLng } from 'react-leaflet2';
import { GreatCircle } from 'arc';
import styles from './index.less';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

export default () => {
  const latlngs = useMemo(() => {
    const generator = new GreatCircle(
      {
        y: -43.449928,
        x: -39.956589,
      },
      { y: 55.606186, x: 49.278728 },
    );
    const line = generator.Arc(100, { offset: 10 });

    return line.geometries[0].coords.map(function (c) {
      return c.reverse();
    });
  }, []);

  return (
    <Fragment>
      <Map center={latLng(0, 0)} zoom={1} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
        <Polyline
          latlngs={latlngs}
          color="blue"
          weight={1}
          opacity={0.5}
          onMounted={(polyline: Leaflet.Polyline) => {
            const totalLength = polyline._path.getTotalLength();
            polyline._path.classList.add(styles['path-start']);
            polyline._path.style.strokeDashoffset = totalLength;
            polyline._path.style.strokeDasharray = totalLength;
            setTimeout(() => {
              console.log(polyline);
              polyline._path.style.strokeDashoffset = 0;
            }, 5000);
          }}
        />
      </Map>
    </Fragment>
  );
};
