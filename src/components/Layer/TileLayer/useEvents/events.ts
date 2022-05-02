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
  /**
   * 单张瓦片停止加载事件
   * @description       单张瓦片停止加载事件
   * @default           undefined
   */
  onTileAbort?: EventHandler<TileEvent, TileLayer>;
} & TileEvents.Methods<TileLayer> &
  LayerEvents.Methods<TileLayer> &
  PopupEvents.Methods<TileLayer> &
  TooltipEvents.Methods<TileLayer>;
