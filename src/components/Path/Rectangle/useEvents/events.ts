import { Popup as LeafletPopup } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';

export const Events = {
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = InteractiveEvents.Methods<LeafletPopup> &
  LayerEvents.Methods<LeafletPopup> &
  PopupEvents.Methods<LeafletPopup> &
  TooltipEvents.Methods<LeafletPopup>;
