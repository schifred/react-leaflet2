import React, { useRef } from 'react';
import { Leaflet, Map, TileLayer, latLng } from 'react-leaflet2';
import styled from 'styled-components';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const position = latLng(52.5049, 13.3937);

const Container = styled.div`
  position: relative;
  overflow: hidden;

  .zoommap {
    width: 200px;
    height: 200px;
    overflow: hidden;
    background: #73b5e5;
    transform: rotate(-60deg);
  }
  #zoomlens {
    top: -9999px;
    left: -9999px;
    overflow: visible;
  }
  #border {
    margin-top: -5px;
    margin-left: -5px;
    border: 5px solid #404040;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  }
  .overlay {
    position: absolute;
    z-index: 1000;
    width: 200px;
    height: 200px;
    overflow: hidden;
    pointer-events: none;
  }
  .rotater {
    transform: rotate(30deg);
  }
`;

export default () => {
  const mapRef = useRef<Leaflet.Map>();
  const zoomMapRef = useRef<Leaflet.Map>();
  const zlRef = useRef<HTMLDivElement>(null);

  return (
    <Container>
      <Map
        center={position}
        zoom={4}
        style={{ width: '100%', height: 400 }}
        onZoomEnd={(e) => {
          if (zoomMapRef.current?._loaded) zoomMapRef.current?.setZoom(e.target.getZoom() + 1);
        }}
        onMouseMove={(e) => {
          if (zlRef.current && mapRef.current) {
            zlRef.current.style.top = ~~e.containerPoint.y - 100 + 'px';
            zlRef.current.style.left = ~~e.containerPoint.x - 100 + 'px';
            zoomMapRef.current?.setView(e.latlng, mapRef.current.getZoom() + 1, true);
          }
        }}
        ref={mapRef}
      >
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
      </Map>
      <div id="zoomlens" className="overlay" ref={zlRef}>
        <div className="overlay rotater">
          <div className="overlay rotater">
            <Map
              center={position}
              fadeAnimation={false}
              zoomControl={false}
              attributionControl={false}
              zoom={5}
              className="zoommap"
              style={{ width: 200, height: 200, position: 'absolute', zIndex: 1000 }}
              ref={zoomMapRef}
            >
              <TileLayer url={MB_URL} id="streets-v11" />
            </Map>
          </div>
        </div>
        <div id="border" className="overlay"></div>
      </div>
    </Container>
  );
};
