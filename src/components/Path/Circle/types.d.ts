import React from 'react';
import Leaflet, { CircleMarker, CircleMarkerOptions, LatLngExpression } from 'leaflet';
import { Methods } from './useEvents/events';

export type CircleProps = {
  /**
   * 圆的经纬度列表
   * @description       圆的经纬度列表
   * @default           undefined
   */
  latlng: LatLngExpression;
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
  onMounted?: (circle: CircleMarker) => void;
} & CircleMarkerOptions &
  Methods;
