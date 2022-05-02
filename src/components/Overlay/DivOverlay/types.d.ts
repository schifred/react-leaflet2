import React from 'react';
import Leaflet, { LatLng } from 'leaflet';
import DivOverlayLayer from './DivOverlayLayer';
import { Events, Methods } from './useEvents/events';

export type DivOverlayProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * 位置
   * @description       位置
   * @default           undefined
   */
  latlng: LatLng;
  /**
   * 样式类
   * @description       样式类
   * @default           undefined
   */
  className?: string;
  /**
   * 是否调整地图定位
   * @description       是否调整地图定位
   * @default           undefined
   */
  fit?: boolean;
  /**
   * 挂载事件
   * @description       挂载事件
   * @default           undefined
   */
  onMounted?: (divOverlayLayer: typeof DivOverlayLayer) => void;
} & Methods;
