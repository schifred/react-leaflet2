import { FeatureGroup, LatLng, Icon, LeafletEvent } from 'leaflet';
import { EnhancedMapProps } from '../EnhancedMap/types';
import { WKTProps } from '../../components/WKT/types';
import { MarkerProps } from '../../components/Marker/Marker/types';

export type PolygonDrawProps = {
  /**
   * wkt 格式
   * @description       wkt 格式
   * @default           undefined
   */
  wkt?: string;
  /**
   * 变更事件
   * @description       变更事件
   * @default           undefined
   */
  onChange?: (wkt: string, featureGroup: FeatureGroup, event?: LeafletEvent) => void;
} & EnhancedMapProps;
