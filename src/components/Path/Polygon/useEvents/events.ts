import { Polygon } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';

export const Events = {
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = InteractiveEvents.Methods<Polygon> &
  LayerEvents.Methods<Polygon> &
  PopupEvents.Methods<Polygon> &
  TooltipEvents.Methods<Polygon>;
