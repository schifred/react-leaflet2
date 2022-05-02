import React from 'react';
import { GridLayer, GridLayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type GridLayerProps = {
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
  onMounted?: (gridLayer: GridLayer) => void;
} & GridLayerOptions &
  Methods;
