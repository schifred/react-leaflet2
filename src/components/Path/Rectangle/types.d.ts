import React from 'react';
import Leaflet, { Rectangle, PolylineOptions, LatLngExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type RectangleProps = {
  /**
   * 矩形的经纬度列表
   * @description       矩形的经纬度列表
   * @default           undefined
   */
  latlngs: LatLngBoundsExpression;
  /**
   * 是否调整地图定位
   * @description       是否调整地图定位
   * @default           undefined
   */
  fit?: boolean;
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
  onMounted?: (rectangle: Rectangle) => void;
} & PolylineOptions &
  Methods;
