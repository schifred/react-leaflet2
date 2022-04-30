import Leaflet, { Layer as LeafletLayer, LayerOptions } from 'leaflet';
import 'leaflet.markercluster';
import { Methods } from './useEvents/events';

export type MarkerClusterProps = {
  children?: React.ReactNode;
} & Methods &
  Leaflet.MarkerClusterGroupOptions;
