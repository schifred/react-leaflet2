import { Layer, LayerOptions, LayerGroup } from 'leaflet';
import { Methods } from './useEvents/events';

export type LayerGroupProps = {
  children?: React.ReactNode;
  layers?: Layer[];
  onMounted?: (layerGroup: LayerGroup) => void;
} & LayerOptions &
  Methods;
