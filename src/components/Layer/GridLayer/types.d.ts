import React from 'react';
import { GridLayer, GridLayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type GridLayerProps = {
  children?: React.ReactNode;
  onMounted?: (gridLayer: GridLayer) => void;
} & GridLayerOptions &
  Methods;
