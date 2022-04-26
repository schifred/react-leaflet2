import { ImageOverlay as LeafletImageOverlay } from 'leaflet';
import { LayerEvents } from '../../../_events';

export const Events = {
  ...LayerEvents.Events,
};

export type Methods = {} & LayerEvents.Methods<LeafletImageOverlay>;
