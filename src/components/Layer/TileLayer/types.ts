import React from 'react';
import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type TileLayerProps = {
  url?: string;
  createTileLayer?: (options: TileLayerOptions) => LeafletTileLayer;
  children?: React.ReactNode;
} & TileLayerOptions &
  Methods;
