import { LayerGroup, LayerEvent } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';
import type { EventHandler } from '../../../../types';

export const Events = {
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = InteractiveEvents.Methods<LayerGroup> &
  LayerEvents.Methods<LayerGroup> &
  PopupEvents.Methods<LayerGroup> &
  TooltipEvents.Methods<LayerGroup>;
