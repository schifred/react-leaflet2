import { Layer, DomUtil, Util, LatLng } from 'leaflet';
import './index.less';

const DivOverlayLayer = Layer.extend({
  options: {
    pane: 'overlayPane',
  },

  initialize: function (options: { latlng: LatLng }) {
    Util.setOptions(this, options);
  },

  onAdd: function () {
    this._container = DomUtil.create(
      'div',
      this.options.className
        ? `react-leaflet2-div-overlay ${this.options.className}`
        : 'react-leaflet2-div-overlay',
    );

    this.getPane(this.options.pane).appendChild(this._container);
    this.setLatlng(this.options.latlng);
  },

  onRemove: function () {
    this.getPane(this.options.pane).removeChild(this._container);
  },

  getEvents: function () {
    return {};
  },

  setLatlng: function (latlng: LatLng) {
    const pos = this._map.latLngToLayerPoint(latlng).round();
    DomUtil.setPosition(this._container, pos);
  },
});

export default DivOverlayLayer;
