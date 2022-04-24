import { Layer as LeafletLayer, LayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type LayerGroupProps = {
  children?: React.ReactNode;
  layers?: LeafletLayer[];
} & LayerOptions &
  Methods;
