import { Icon, LatLng } from 'leaflet';
import { EnhancedMapProps } from '../EnhancedMap/types';

export type PositionProps = {
  icon?: typeof Icon;
  onChange?: (latlng: LatLng) => void;
  latlng?: LatLng;
} & EnhancedMapProps;
