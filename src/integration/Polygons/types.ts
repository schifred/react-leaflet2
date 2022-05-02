import { EnhancedMapProps } from '../EnhancedMap/types';
import { WKTProps } from '../../components/WKT/types';

export type PolygonsProps = {
  /**
   * wkt 格式多边形
   * @description       wkt 格式多边形
   * @default           undefined
   */
  ploygons?: WKTProps[];
  /**
   * 获取 key
   * @description       获取 key
   * @default           undefined
   */
  getKey: (wkt: WKTProps) => string;
} & EnhancedMapProps;
