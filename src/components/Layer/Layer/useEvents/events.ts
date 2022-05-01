import { TileLayer } from 'leaflet';
import { TileEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';

export const Events = {
  ...TileEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = {} & TileEvents.Methods<TileLayer> &
  LayerEvents.Methods<TileLayer> &
  PopupEvents.Methods<TileLayer> &
  TooltipEvents.Methods<TileLayer>;
