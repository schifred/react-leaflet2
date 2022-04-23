import { TileLayer, TileEvent } from 'leaflet';
import { TileEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';
import type { EventHandler } from '../../../../types';

export const Events = {
  onTileAbort: 'tileabort',
  ...TileEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = {
  onTileAbort?: EventHandler<TileEvent, TileLayer>;
} & TileEvents.Methods<TileLayer> &
  LayerEvents.Methods<TileLayer> &
  PopupEvents.Methods<TileLayer> &
  TooltipEvents.Methods<TileLayer>;
