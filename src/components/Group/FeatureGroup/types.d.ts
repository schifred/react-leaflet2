import { Layer, LayerOptions, FeatureGroup } from 'leaflet';
import { Methods } from './useEvents/events';

export type FeatureGroupProps = {
  children?: React.ReactNode;
  layers?: Layer[];
  onMounted?: (featureGroup: FeatureGroup) => void;
} & Methods &
  LayerOptions;
