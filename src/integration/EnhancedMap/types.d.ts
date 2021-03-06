import React from 'react';
import { Control } from 'leaflet';
import { MapProps } from '../../components/Map/types';
import { TileLayerProps } from '../../components/Layer/TileLayer/types';
import { ControlLayerProp } from '../../components/Control/ControlLayers/types';
import { Option } from '../../components/Control/ControlSearch/types';

type ControlType = ('zoom' | 'scale' | 'fullscreen' | 'attribution' | 'search' | 'layers') & string;

export type EnhancedMapProps = {
  /**
   * 控制器
   * @description       控制器
   * @default           undefined
   */
  controls?: ControlType[];
  /**
   * 控制器组件
   * @description       控制器组件
   * @default           undefined
   */
  Controls?: Record<string, React.FC>;
  /**
   * 搜索事件
   * @description       搜索事件
   * @default           undefined
   */
  onSearch?: (text: string) => Promise<Option[]>;
  /**
   * 图层切换
   * @description       图层切换
   * @default           undefined
   */
  layers?: Layer[];
  /**
   * 图层
   * @description       图层
   * @default           undefined
   */
  tileLayers?: Omit<TileLayerProps, 'children'>[];
} & Omit<MapProps, 'layers'>;

export type Layer = Omit<ControlLayerProp, 'children'> & {
  /**
   * 图层
   * @description       图层
   * @default           undefined
   */
  tileLayers: Omit<TileLayerProps, 'children'>[];
};
