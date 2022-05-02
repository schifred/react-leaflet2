import React from 'react';
import Leaflet, { Popup, PopupOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type PopupProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * 是否可见
   * @description       是否可见
   * @default           undefined
   */
  visible?: boolean;
  /**
   * 位置
   * @description       位置
   * @default           undefined
   */
  latlng?: LatLngExpression;
  /**
   * 挂载事件
   * @description       挂载事件
   * @default           undefined
   */
  onMounted?: (popup: Popup) => void;
} & PopupOptions &
  Methods;
