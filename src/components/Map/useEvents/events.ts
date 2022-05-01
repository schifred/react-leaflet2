import {
  Map as LeafletMap,
  LayersControlEvent,
  LayerEvent,
  LeafletEvent,
  ResizeEvent,
  ErrorEvent,
  LocationEvent,
  LeafletMouseEvent,
  LeafletKeyboardEvent,
  ZoomAnimEvent,
} from 'leaflet';
import { InteractiveEvents, PopupEvents, TooltipEvents } from '../../_events';
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
  onAutoPanStart: 'autopanstart',
  onLocationError: 'locationerror',
  onLocationFound: 'locationfound',
  ...InteractiveEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
  onMouseMove: 'mousemove',
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
  onAutoPanStart?: EventHandler<LeafletEvent, LeafletMap>;
  onLocationError?: EventHandler<ErrorEvent, LeafletMap>;
  onLocationFound?: EventHandler<LocationEvent, LeafletMap>;
  onMouseMove?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onKeyPress?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  onKeyDown?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  onKeyUp?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  onPreClick?: EventHandler<LeafletMouseEvent, LeafletMap>;
  onZoomAnim?: EventHandler<ZoomAnimEvent, LeafletMap>;
} & InteractiveEvents.Methods<LeafletMap> &
  PopupEvents.Methods<LeafletMap> &
  TooltipEvents.Methods<LeafletMap>;
