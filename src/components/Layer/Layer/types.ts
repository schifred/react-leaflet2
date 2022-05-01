import React from 'react';
import { Layer, LayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type LayerProps = {
  layer?: Layer;
  children?: React.ReactNode;
  onMounted?: (layer: Layer) => void;
} & LayerOptions &
  Methods;
