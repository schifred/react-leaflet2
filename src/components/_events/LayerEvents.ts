import { LayerEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onAdd: 'add',
  onRemove: 'remove',
};

export type Methods<T> = {
  /**
   * 图层添加事件
   * @description       图层添加事件
   * @default           undefined
   */
  onAdd?: EventHandler<LayerEvent, T>;
  /**
   * 图层移除事件
   * @description       图层移除事件
   * @default           undefined
   */
  onRemove?: EventHandler<LayerEvent, T>;
};
