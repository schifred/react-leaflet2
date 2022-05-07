import React, { useState, useCallback } from 'react';
import {
  PolygonDraw,
  latLng,
  getCenter,
  getArea,
  Marker,
  checkFeatureGroupContain,
} from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const center = latLng(30.271486, 120.160136);
const wkt =
  'POLYGON((120.1161003112793 30.30691909894813,120.12451171875 30.30709076032508,120.11833190917969 30.301082612131722,120.1161003112793 30.30691909894813))';

const points = [
  {
    latlng: latLng(30.30401909894813, 120.1178003112793),
    selected: true,
  },
  {
    latlng: latLng(30.30694909894813, 120.1290003112793),
    selected: true,
  },
];

export default () => {
  const [pts, setPts] = useState(points);
  const handlePointClick = useCallback(
    (point) => {
      point.selected = !point.selected;
      setPts([...pts]);
    },
    [pts],
  );

  return (
    <PolygonDraw
      // 中心点等 LatLng 使用同一对象，避免重新定位
      center={center}
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
      wkt={wkt}
      onChange={(val, featureGroup, event) => {
        console.log(val);
        console.log(featureGroup);
        console.log(event);
        console.log(getCenter(featureGroup));
        console.log(getArea(featureGroup));
        setPts(pts.filter((pt) => checkFeatureGroupContain(featureGroup, pt.latlng)));
      }}
    >
      {pts?.map((point) => {
        const { selected, latlng, ...rest } = point;
        return (
          <Marker
            key={latlng.toString()}
            {...rest}
            // icon={selected ? selectedIcon : unselectedIcon}
            latlng={latlng}
            onClick={handlePointClick}
          />
        );
      })}
    </PolygonDraw>
  );
};
