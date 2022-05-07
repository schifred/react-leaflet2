import React from 'react';
import { GeoJSONOptions } from 'leaflet';
import Wicket from 'wicket';
import { PolylineProps } from '../Path/Polyline/types';
import { PolygonProps } from '../Path/Polygon/types';
import { MarkerProps } from '../Marker/Marker/types';

export type WKTProps = (
  | Omit<PolylineProps, 'latlngs' | 'onMounted'>
  | Omit<PolygonProps, 'latlngs' | 'onMounted'>
  | Omit<MarkerProps, 'latlng' | 'onMounted'>
) & {
  /**
   * wkt 数据
   * @description       wkt 数据
   * @default           undefined
   */
  wkt?: string;
  /**
   * 挂载事件
   * @description       挂载事件
   * @default           undefined
   */
  onMounted?: (wkt: Wicket.Wkt) => void;
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
};
