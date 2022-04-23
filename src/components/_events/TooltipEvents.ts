import { TooltipEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onTooltipOpen: 'tooltipopen',
  onTooltipClose: 'tooltipclose',
};

export type Methods<T> = {
  onTooltipOpen?: EventHandler<TooltipEvent, T>;
  onTooltipClose?: EventHandler<TooltipEvent, T>;
};
