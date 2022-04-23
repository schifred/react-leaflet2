import { GridLayer } from 'leaflet';
import { TileEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';

export const Events = {
  ...TileEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = TileEvents.Methods<GridLayer> &
  LayerEvents.Methods<GridLayer> &
  PopupEvents.Methods<GridLayer> &
  TooltipEvents.Methods<GridLayer>;
