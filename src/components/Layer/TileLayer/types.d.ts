import React from 'react';
import { TileLayer, TileLayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type TileLayerProps = {
  /**
   * 加载瓦片的 url
   * @description       加载瓦片的 url
   * @default           undefined
   */
  url?: string;
  /**
   * 创建 TileLayer 实例
   * @description       创建 TileLayer 实例
   * @default           undefined
   */
  createTileLayer?: (options: TileLayerOptions) => TileLayer;
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * 挂载事件
   * @description       挂载事件
   * @default           undefined
   */
  onMounted?: (tileLayer: TileLayer) => void;
} & TileLayerOptions &
  Methods;
