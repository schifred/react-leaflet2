import React from 'react';
import { TileLayer, TileLayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type TileLayerProps = {
  url?: string;
  createTileLayer?: (options: TileLayerOptions) => TileLayer;
  children?: React.ReactNode;
  onMounted?: (tileLayer: TileLayer) => void;
} & TileLayerOptions &
  Methods;
