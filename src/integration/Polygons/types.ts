import { EnhancedMapProps } from '../EnhancedMap/types';
import { WKTProps } from '../../components/WKT/types';

export type PolygonsProps = {
  ploygons?: WKTProps[];
  getKey: (wkt: WKTProps) => string;
} & EnhancedMapProps;
