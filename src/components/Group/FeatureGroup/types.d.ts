import { Layer as LeafletLayer, LayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type FeatureGroupProps = {
  children?: React.ReactNode;
  layers?: LeafletLayer[];
} & Methods &
  LayerOptions;
