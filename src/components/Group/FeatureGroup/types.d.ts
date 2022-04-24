import { Layer as LeafletLayer, LayerOptions } from 'leaflet';

export type FeatureGroupProps = {
  children?: React.ReactNode;
  layers?: LeafletLayer[];
} & Methods &
  LayerOptions;
