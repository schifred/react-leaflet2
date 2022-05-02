import React from 'react';
import { GeoJSON, GeoJSONOptions } from 'leaflet';
import { GeoJsonObject } from 'geojson';
import { WKTProps } from '../WKT/types';

export type GeoJsonProps = {
  /**
   * geojson 数据
   * @description       geojson 数据
   * @default           undefined
   */
  geojson?: GeoJsonObject;
} & Omit<WKTProps, 'wkt'>;

export type GeoJsonGroupProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * geojson 数据
   * @description       geojson 数据
   * @default           undefined
   */
  geojson?: GeoJsonObject;
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
  onMounted?: (geojson: GeoJSON) => void;
} & GeoJSONOptions;
