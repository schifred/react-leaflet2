import { Tooltip as LeafletTooltip } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';

export const Events = {
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = InteractiveEvents.Methods<LeafletTooltip> &
  LayerEvents.Methods<LeafletTooltip> &
  PopupEvents.Methods<LeafletTooltip> &
  TooltipEvents.Methods<LeafletTooltip>;
