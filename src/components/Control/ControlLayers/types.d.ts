import React from 'react';
import { Control } from 'leaflet';

export type ControlLayersProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children: React.ReactNode;
  /**
   * 基础图层
   * @description       基础图层
   * @default           undefined
   */
  baseLayers?: Control.LayersObject;
  /**
   * 覆盖图层
   * @description       覆盖图层
   * @default           undefined
   */
  overlays?: Control.LayersObject;
} & Control.LayersOptions;

export type ControlLayerProp = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children: React.ReactNode;
  /**
   * 名称标识
   * @description       名称标识
   * @default           undefined
   */
  name: string;
  /**
   * 是否覆盖物
   * @description       是否覆盖物
   * @default           undefined
   */
  checked?: boolean;
  /**
   * 位置
   * @description       位置
   * @default           undefined
   */
  overlay?: boolean;
};
