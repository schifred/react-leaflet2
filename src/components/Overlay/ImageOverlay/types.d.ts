import React from 'react';
import Leaflet, { ImageOverlay, ImageOverlayOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type ImageOverlayProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * 图片地址
   * @description       图片地址
   * @default           undefined
   */
  url: string;
  /**
   * 区域
   * @description       区域
   * @default           undefined
   */
  bounds: LatLngBoundsExpression;
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
  onMounted?: (imageOverlay: ImageOverlay) => void;
} & ImageOverlayOptions &
  Methods;
