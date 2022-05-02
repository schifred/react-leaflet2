import React from 'react';
import { Map, TileLayer, ControlProvider, latLng } from 'react-leaflet2';
import styled from 'styled-components';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const Container = styled.div`
  .legend-wrap {
    padding: 10px;
    background: #fff;
    border-radius: 3px;
    box-shadow: 0 1px 2px rgb(0 0 0 / 10%);
  }

  .legend-label {
    display: block;
    float: left;
    width: 20%;
    height: 15px;
    color: #808080;
    font-size: 9px;
    text-align: center;
  }
`;

export default () => {
  return (
    <Container>
      <Map center={latLng(57.72, 11.945)} zoom={14} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />

        <ControlProvider position="bottomright">
          <div className="legend-wrap">
            <strong>The Title or Explanation of your Map</strong>
            <nav className="legend clearfix" />
            <span className="legend-label" style={{ background: '#F1EEF6' }}></span>
            <span className="legend-label" style={{ background: '#BDC9E1' }}></span>
            <span className="legend-label" style={{ background: '#74A9CF' }}></span>
            <span className="legend-label" style={{ background: '#2B8CBE' }}></span>
            <span className="legend-label" style={{ background: '#045A8D' }}></span>
            <label className="legend-label">0 - 20%</label>
            <label className="legend-label">40%</label>
            <label className="legend-label">60%</label>
            <label className="legend-label">80%</label>
            <label className="legend-label">100%</label>
            <small>
              Source: <a href="#link to source">Name of source</a>
            </small>
          </div>
        </ControlProvider>
      </Map>
    </Container>
  );
};
