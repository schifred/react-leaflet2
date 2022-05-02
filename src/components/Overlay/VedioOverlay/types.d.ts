import React from 'react';
import Leaflet, { VideoOverlay, VideoOverlayOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type VideoOverlayProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * 视频地址
   * @description       视频地址
   * @default           undefined
   */
  url: string | string[];
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
  onMounted?: (videoOverlay: VideoOverlay) => void;
} & VideoOverlayOptions &
  Methods;
