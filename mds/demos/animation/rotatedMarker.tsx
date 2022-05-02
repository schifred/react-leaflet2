import React, { useMemo, Fragment, useEffect } from 'react';
import { Leaflet, Map, TileLayer, Marker, latLng } from 'react-leaflet2';

const ACCESS_TOKEN =
  'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw';
const MB_ATTR =
  'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
  'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
const MB_URL =
  'https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token=' + ACCESS_TOKEN;

const RotatedMarker = Leaflet.Marker.extend({
  options: { angle: 0 },
  _setPos: function (pos) {
    Leaflet.Marker.prototype._setPos.call(this, pos);
    if (Leaflet.DomUtil.TRANSFORM) {
      // use the CSS transform rule if available
      this._icon.style[L.DomUtil.TRANSFORM] += ' rotate(' + this.options.angle + 'deg)';
    } else if (Leaflet.Browser.ie) {
      // fallback for IE6, IE7, IE8
      var rad = this.options.angle * Leaflet.LatLng.DEG_TO_RAD,
        costheta = Math.cos(rad),
        sintheta = Math.sin(rad);
      this._icon.style.filter +=
        " progid:DXImageTransform.Microsoft.Matrix(sizingMethod='auto expand', M11=" +
        costheta +
        ', M12=' +
        -sintheta +
        ', M21=' +
        sintheta +
        ', M22=' +
        costheta +
        ')';
    }
  },
});

let direction = 0;

export default () => {
  const marker = useMemo(() => {
    // @ts-ignore
    return new RotatedMarker(latLng(37.9, -77), {
      icon: Leaflet.divIcon({
        className: 'svg-marker',
        html: '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15"><path d="M15 6.818V8.5l-6.5-1-.318 4.773L11 14v1l-3.5-.682L4 15v-1l2.818-1.727L6.5 7.5 0 8.5V6.818L6.5 4.5v-3s0-1.5 1-1.5 1 1.5 1 1.5v2.818l6.5 2.5z"/></svg>',
        iconSize: [24, 24],
      }),
      draggable: true,
    });
  }, []);

  useEffect(() => {
    window.setInterval(function () {
      var ll = marker.getLatLng();
      ll.lat += Math.cos(direction) / 100;
      ll.lng += Math.sin(direction) / 100;
      marker.options.angle = direction * (180 / Math.PI);
      marker.setLatLng(ll);
      if (Math.random() > 0.95) {
        direction += (Math.random() - 0.5) / 2;
      }
    }, 10);
  }, []);

  return (
    <Fragment>
      <Map center={latLng(37.9, -77)} zoom={4} style={{ width: '100%', height: 400 }}>
        <TileLayer url={MB_URL} attribution={MB_ATTR} id="light-v9" />
        <Marker marker={marker} />
      </Map>
    </Fragment>
  );
};
