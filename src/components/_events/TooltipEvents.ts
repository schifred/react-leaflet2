import { TooltipEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onTooltipOpen: 'tooltipopen',
  onTooltipClose: 'tooltipclose',
};

export type Methods<T> = {
  /**
   * 提示打开事件
   * @description       提示打开事件
   * @default           undefined
   */
  onTooltipOpen?: EventHandler<TooltipEvent, T>;
  /**
   * 提示关闭事件
   * @description       提示关闭事件
   * @default           undefined
   */
  onTooltipClose?: EventHandler<TooltipEvent, T>;
};
