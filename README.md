# react-leaflet2

地图渲染。

## ✨ Features

-

## 📦 Install

```
npm i react-leaflet2 --save
```

## 🔨 Usage

```tsx
import React, { Fragment } from 'react';
import { Map, WKT, TileLayer, latLng, Popup } from 'react-leaflet2';
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

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={14} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <WKT wkt={wkt} fit>
          <Popup visible>
            <div>this is a popup</div>
          </Popup>
        </WKT>
      </Map>
    </Fragment>
  );
};
```

## 🖥 Development

```
$ git clone https://github.com/Alfred-sg/react-leaflet2
$ npm install
$ npm run docs
```

打开浏览器访问 http://127.0.0.1:8000。

## 参考

- [leaflet](https://leafletjs.com)
- [react-leaflet](https://react-leaflet.js.org)
- [mapbox.js](https://docs.mapbox.com/mapbox.js)

## LICENSE

MIT
