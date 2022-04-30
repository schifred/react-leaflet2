import { FeatureGroup, LatLng, Icon } from 'leaflet';
import { EnhancedMapProps } from '../EnhancedMap/types';
import { WKTProps } from '../../components/WKT/types';
import { ControlDrawProps } from '../../components/DrawPlayground/types';
import { MarkerProps } from '../../components/Marker/Marker/types';

export type Points = (MarkerProps & {
  selected?: boolean;
})[];

export type Value = {
  center?: LatLng;
  area?: number;
  wkt?: string;
  points?: Points;
  featureGroup?: FeatureGroup;
};

export type DrawProps = {
  ploygons?: WKTProps[];
  points?: Points;
  selectedIcon?: Icon;
  unselectedIcon?: Icon;
  wkt?: string;
  getPloygonKey?: (wkt: WKTProps) => string;
  getPointKey?: (wkt: WKTProps) => string;
  onChange?: (value: Value) => void;
} & EnhancedMapProps &
  Pick<ControlDrawProps, 'draw'>;
