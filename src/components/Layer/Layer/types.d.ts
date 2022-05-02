import React from 'react';
import { Layer, LayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type LayerProps = {
  /**
   * Layer 实例
   * @description       Layer 实例
   * @default           undefined
   */
  layer?: Layer;
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
  onMounted?: (layer: Layer) => void;
} & LayerOptions &
  Methods;
