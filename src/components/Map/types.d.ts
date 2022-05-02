import React from 'react';
import Leaflet, { Map, MapOptions, LatLngBoundsExpression } from 'leaflet';
import { Methods } from './useEvents/events';

export type MapProps = {
  /**
   * 样式类
   * @description       样式类
   * @default           undefined
   */
  className?: string;
  /**
   * 样式
   * @description       样式
   * @default           undefined
   */
  style?: React.CSSProperties;
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * 边界
   * @description       边界
   * @default           undefined
   */
  bounds?: LatLngBoundsExpression;
  /**
   * 挂载事件
   * @description       挂载事件
   * @default           undefined
   */
  onMounted?: (map: Map) => void;
} & MapOptions &
  Methods;
