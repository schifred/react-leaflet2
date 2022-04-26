import { Layer, DomUtil, Util, LatLng } from 'leaflet';
import './index.less';

/**
 * @feat 跟随地图缩放
 */
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
    this.update();
  },

  onRemove: function () {
    this.getPane(this.options.pane).removeChild(this._container);
  },

  getEvents: function () {
    return {
      zoom: this.update,
      viewreset: this.update,
    };
  },

  update: function () {
    this.setLatlng(this.options.latlng);
    return this;
  },

  setLatlng: function (latlng: LatLng) {
    if (this._map) {
      const pos = this._map.latLngToLayerPoint(latlng).round();
      DomUtil.setPosition(this._container, pos);
    }
    return this;
  },

  bringToFront: function () {
    if (this._map) {
      DomUtil.toFront(this.container);
    }
    return this;
  },

  bringToBack: function () {
    if (this._map) {
      DomUtil.toBack(this._image);
    }
    return this;
  },
});

export default DivOverlayLayer;
