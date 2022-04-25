import { Marker as LeafletMarker, LeafletEvent, DragEndEvent } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../_events';
import type { EventHandler } from '../../../types';

export const Events = {
  onMove: 'move',
  onDragStart: 'dragstart',
  onMoveStart: 'movestart',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onMoveEnd: 'moveend',
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = {
  onMove?: EventHandler<LeafletEvent, LeafletMarker>;
  onDragStart?: EventHandler<LeafletEvent, LeafletMarker>;
  onMoveStart?: EventHandler<LeafletEvent, LeafletMarker>;
  onDrag?: EventHandler<LeafletEvent, LeafletMarker>;
  onDragEnd?: EventHandler<DragEndEvent, LeafletMarker>;
  onMoveEnd?: EventHandler<LeafletEvent, LeafletMarker>;
} & InteractiveEvents.Methods<LeafletMarker> &
  LayerEvents.Methods<LeafletMarker> &
  PopupEvents.Methods<LeafletMarker> &
  TooltipEvents.Methods<LeafletMarker>;
