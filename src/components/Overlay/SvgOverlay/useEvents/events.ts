import { ImageOverlay as LeafletImageOverlay, LeafletEvent } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';
import type { EventHandler } from '../../../../types';

export const Events = {
  onLoad: 'load',
  onError: 'error',
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = {
  onLoad?: EventHandler<LeafletEvent, LeafletImageOverlay>;
  onError?: EventHandler<LeafletEvent, LeafletImageOverlay>;
} & InteractiveEvents.Methods<LeafletImageOverlay> &
  LayerEvents.Methods<LeafletImageOverlay> &
  PopupEvents.Methods<LeafletImageOverlay> &
  TooltipEvents.Methods<LeafletImageOverlay>;
