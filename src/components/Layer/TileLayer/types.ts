import React from 'react';
import { TileLayerOptions } from 'leaflet';

export type TileLayerProps = {
  url: string;
  children?: React.ReactNode;
} & TileLayerOptions;
