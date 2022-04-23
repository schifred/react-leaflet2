import {
  Map as LeafletMap,
  LayersControlEvent,
  LayerEvent,
  LeafletEvent,
  ResizeEvent,
  PopupEvent,
  TooltipEvent,
  ErrorEvent,
  LocationEvent,
  LeafletMouseEvent,
  LeafletKeyboardEvent,
  ZoomAnimEvent,
} from 'leaflet';
import type { EventHandler } from '../../../types';

export const Events = {
  onBaseLayerChange: 'baselayerchange',
  onOverlayAdd: 'overlayadd',
  onOverlayRemove: 'overlayremove',
  onLayerAdd: 'layeradd',
  onLayerRemove: 'layerremove',
  onZoomLevelsChange: 'zoomlevelschange',
  onResize: 'resize',
  onUnload: 'unload',
  onViewReset: 'viewreset',
  onLoad: 'load',
  onZoomStart: 'zoomstart',
  onMoveStart: 'movestart',
  onZoom: 'zoom',
  onMove: 'move',
  onZoomEnd: 'zoomend',
  onMoveEnd: 'moveend',
  onPopupOpen: 'popupopen',
  onPopupClose: 'popupclose',
  onAutoPanStart: 'autopanstart',
  onTooltipOpen: 'tooltipopen',
  onTooltipClose: 'tooltipclose',
  onLocationError: 'locationerror',
  onLocationFound: 'locationfound',
  onClick: 'click',
  onDblClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onMouseOver: 'mouseover',
  onMouseOut: 'mouseout',
  onMouseMove: 'mousemove',
  onContextMenu: 'contextmenu',
  onKeyPress: 'keypress',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
  onPreClick: 'preclick',
  onZoomAnim: 'zoomanim',
};

export type Methods = {
  onBaseLayerChange?: EventHandler<LayersControlEvent, LeafletMap>;
  onOverlayAdd?: EventHandler<LayersControlEvent, LeafletMap>;
  onOverlayRemove?: EventHandler<LayersControlEvent, LeafletMap>;
  onLayerAdd?: EventHandler<LayerEvent, LeafletMap>;
  onLayerRemove?: EventHandler<LayerEvent, LeafletMap>;
  onZoomLevelsChange?: EventHandler<LeafletEvent, LeafletMap>;
  onResize?: EventHandler<ResizeEvent, LeafletMap>;
  onUnload?: EventHandler<LeafletEvent, LeafletMap>;
  onViewReset?: EventHandler<LeafletEvent, LeafletMap>;
  onLoad?: EventHandler<LeafletEvent, LeafletMap>;
  onZoomStart?: EventHandler<LeafletEvent, LeafletMap>;
  onMoveStart?: EventHandler<LeafletEvent, LeafletMap>;
  onZoom?: EventHandler<LeafletEvent, LeafletMap>;
  onMove?: EventHandler<LeafletEvent, LeafletMap>;
  onZoomEnd?: EventHandler<LeafletEvent, LeafletMap>;
  onMoveEnd?: EventHandler<LeafletEvent, LeafletMap>;
  onPopupOpen?: EventHandler<PopupEvent, LeafletMap>;
  onPopupClose?: EventHandler<PopupEvent, LeafletMap>;
  onAutoPanStart?: EventHandler<LeafletEvent, LeafletMap>;
  onTooltipOpen?: EventHandler<TooltipEvent, LeafletMap>;
  onTooltipClose?: EventHandler<TooltipEvent, LeafletMap>;
  onLocationError?: EventHandler<ErrorEvent, LeafletMap>;
  onLocationFound?: EventHandler<LocationEvent, LeafletMap>;
  onClick?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onDblClick?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onMouseDown?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onMouseUp?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onMouseOver?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onMouseOut?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onMouseMove?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onContextMenu?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onKeyPress?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  onKeyDown?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  onKeyUp?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  onPreClick?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onZoomAnim?: EventHandler<ZoomAnimEvent, LeafletMap>;
};
