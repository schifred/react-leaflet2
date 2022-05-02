import { Layer, LayerOptions, FeatureGroup } from 'leaflet';
import { Methods } from './useEvents/events';

export type FeatureGroupProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
  /**
   * 图层
   * @description       图层
   * @default           undefined
   */
  layers?: Layer[];
  /**
   * 挂载事件
   * @description       挂载事件
   * @default           undefined
   */
  onMounted?: (featureGroup: FeatureGroup) => void;
} & Methods &
  LayerOptions;
