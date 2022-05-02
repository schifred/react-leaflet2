import { Icon, LatLng } from 'leaflet';
import { EnhancedMapProps } from '../EnhancedMap/types';

export type PositionProps = {
  /**
   * 图标
   * @description       图标
   * @default           undefined
   */
  icon?: typeof Icon;
  /**
   * 变更事件
   * @description       变更事件
   * @default           undefined
   */
  onChange?: (latlng: LatLng) => void;
  /**
   * 位置
   * @description       位置
   * @default           undefined
   */
  latlng?: LatLng;
} & EnhancedMapProps;
