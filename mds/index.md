---
title: 首页
order: 1
hero:
  title: react-leaflet2
  desc: 另一个 leaflet 地图的 React 组件库
  actions:
    - text: 指南
      link: /guide/demo
---

## ✨ Features

- 瓦片图
- 矢量图
- 覆盖物
- 标记
- WKT、GeoJson
- 绘图

## 📦 Install

```
npm i react-leaflet --save
```

## 🔨 Usage

```
import React, { Fragment } from 'react';
import { Map, TileLayer, latLng } from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

export default () => {
  return (
    <Fragment>
      <Map center={latLng(37.77396, -122.4366)} zoom={13} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
      </Map>
    </Fragment>
  );
};
```

## 🖥 Development

```
$ git clone https://github.com/Alfred-sg/react-leaflet2
$ npm install
$ npm run start
```

打开浏览器访问 http://127.0.0.1:8000。
