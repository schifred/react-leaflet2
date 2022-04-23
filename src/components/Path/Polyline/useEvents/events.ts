import { Polyline } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';

export const Events = {
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = InteractiveEvents.Methods<Polyline> &
  LayerEvents.Methods<Polyline> &
  PopupEvents.Methods<Polyline> &
  TooltipEvents.Methods<Polyline>;
