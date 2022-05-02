import React from 'react';
import { TileLayer, WMSOptions, WMSParams } from 'leaflet';
import { Methods } from './useEvents/events';

export type TileLayerWMSProps = {
  /**
   * 请求的 url
   * @description       请求的 url
   * @default           undefined
   */
  url: string;
  /**
   * 额外参数
   * @description       额外参数
   * @default           undefined
   */
  params?: WMSParams;
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
  onMounted?: (tileLayerWMS: TileLayer.WMS) => void;
} & WMSOptions &
  Methods;
