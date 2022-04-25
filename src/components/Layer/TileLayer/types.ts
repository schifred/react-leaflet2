import React from 'react';
import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';

export type TileLayerProps = {
  url?: string;
  createTileLayer?: (options: TileLayerOptions) => LeafletTileLayer;
  children?: React.ReactNode;
} & TileLayerOptions;
