import { FeatureGroup, LatLng, Icon } from 'leaflet';
import { EnhancedMapProps } from '../EnhancedMap/types';
import { WKTProps } from '../../components/WKT/types';
import { MarkerProps } from '../../components/Marker/Marker/types';

export type Points = (MarkerProps & {
  selected?: boolean;
})[];

export type Value = {
  /**
   * 中心点
   * @description       中心点
   * @default           undefined
   */
  center?: LatLng;
  /**
   * 面积
   * @description       面积
   * @default           undefined
   */
  area?: number;
  /**
   * wkt 数据
   * @description       wkt 数据
   * @default           undefined
   */
  wkt?: string;
  /**
   * 点
   * @description       点
   * @default           undefined
   */
  points?: Points;
  /**
   * FeatureGroup 实例
   * @description       FeatureGroup 实例
   * @default           undefined
   */
  featureGroup?: FeatureGroup;
};

export type PolygonDrawProps = {
  /**
   * wkt 格式多边形
   * @description       wkt 格式多边形
   * @default           undefined
   */
  ploygons?: WKTProps[];
  /**
   * 点
   * @description       点
   * @default           undefined
   */
  points?: Points;
  /**
   * 选中图标
   * @description       选中图标
   * @default           undefined
   */
  selectedIcon?: Icon;
  /**
   * 未选中图标
   * @description       未选中图标
   * @default           undefined
   */
  unselectedIcon?: Icon;
  wkt?: string;
  /**
   * 变更事件
   * @description       变更事件
   * @default           undefined
   */
  onChange?: (value: Value) => void;
} & EnhancedMapProps;
