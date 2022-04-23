import {
  Marker as LeafletMarker,
  LayerEvent,
  LeafletEvent,
  PopupEvent,
  TooltipEvent,
  LeafletMouseEvent,
  DragEndEvent,
} from 'leaflet';
import type { EventHandler } from '../../../types';

export const Events = {
  onMove: 'move',
  onDragStart: 'dragstart',
  onMoveStart: 'movestart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onMoveEnd: 'moveend',
  onClick: 'click',
  onDblClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onMouseOver: 'mouseover',
  onMouseOut: 'mouseout',
  onContextMenu: 'contextmenu',
  onAdd: 'add',
  onRemove: 'remove',
  onPopupOpen: 'popupopen',
  onPopupClose: 'popupclose',
  onTooltipOpen: 'tooltipopen',
  onTooltipClose: 'tooltipclose',
};

export type Methods = {
  onMove?: EventHandler<LeafletEvent, LeafletMarker>;
  onDragStart?: EventHandler<LeafletEvent, LeafletMarker>;
  onMoveStart?: EventHandler<LeafletEvent, LeafletMarker>;
  onDrag?: EventHandler<LeafletEvent, LeafletMarker>;
  onDragEnd?: EventHandler<DragEndEvent, LeafletMarker>;
  onMoveEnd?: EventHandler<LeafletEvent, LeafletMarker>;
  onClick?: EventHandler<LeafletMouseEvent, LeafletMarker>;
  onDblClick?: EventHandler<LeafletMouseEvent, LeafletMarker>;
  onMouseDown?: EventHandler<LeafletMouseEvent, LeafletMarker>;
  onMouseUp?: EventHandler<LeafletMouseEvent, LeafletMarker>;
  onMouseOver?: EventHandler<LeafletMouseEvent, LeafletMarker>;
  onMouseOut?: EventHandler<LeafletMouseEvent, LeafletMarker>;
  onContextMenu?: EventHandler<LeafletMouseEvent, LeafletMarker>;
  onAdd?: EventHandler<LayerEvent, LeafletMarker>;
  onRemove?: EventHandler<LayerEvent, LeafletMarker>;
  onPopupOpen?: EventHandler<PopupEvent, LeafletMarker>;
  onPopupClose?: EventHandler<PopupEvent, LeafletMarker>;
  onTooltipOpen?: EventHandler<TooltipEvent, LeafletMarker>;
  onTooltipClose?: EventHandler<TooltipEvent, LeafletMarker>;
};
