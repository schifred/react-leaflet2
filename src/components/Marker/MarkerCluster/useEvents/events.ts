import { MarkerClusterGroup, LayerEvent } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';
import type { EventHandler } from '../../../../types';

export const Events = {
  onAnimationEnd: 'animationend',
  onSpiderfied: 'spiderfied',
  onUnspiderfied: 'unspiderfied',
  onLayerAdd: 'layeradd',
  onLayerRemove: 'layerremove',
  onClusterClick: 'clusterclick',
  onClusterDblClick: 'clusterdblclick',
  onClusterMouseDown: 'clustermousedown',
  onClusterMouseUp: 'clustermouseup',
  onClusterMouseOver: 'clustermouseover',
  onClusterMouseOut: 'clustermouseout',
  onClusterContextMenu: 'clustercontextmenu',
  onClusterAdd: 'clusteradd',
  onClusterRemove: 'clusterremove',
  onClusterPopupOpen: 'clusterpopupopen',
  onClusterPopupClose: 'clusterpopupclose',
  onClusterTooltipOpen: 'clustertooltipopen',
  onClusterTooltipClose: 'clustertooltipclose',
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = {
  onAnimationEnd?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onSpiderfied?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onUnspiderfied?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onLayerAdd?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onLayerRemove?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterClick?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterDblClick?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterMouseDown?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterMouseUp?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterMouseOver?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterMouseOut?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterContextMenu?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterAdd?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterRemove?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterPopupOpen?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterPopupClose?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterTooltipOpen?: EventHandler<LayerEvent, MarkerClusterGroup>;
  onClusterTooltipClose?: EventHandler<LayerEvent, MarkerClusterGroup>;
} & InteractiveEvents.Methods<MarkerClusterGroup> &
  LayerEvents.Methods<MarkerClusterGroup> &
  PopupEvents.Methods<MarkerClusterGroup> &
  TooltipEvents.Methods<MarkerClusterGroup>;
