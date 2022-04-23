import { CircleMarker, LeafletEvent } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';
import type { EventHandler } from '../../../../types';

export const Events = {
  onMove: 'move',
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = {
  onMove?: EventHandler<LeafletEvent, CircleMarker>;
} & InteractiveEvents.Methods<CircleMarker> &
  LayerEvents.Methods<CircleMarker> &
  PopupEvents.Methods<CircleMarker> &
  TooltipEvents.Methods<CircleMarker>;
