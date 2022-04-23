import React from 'react';
import { GridLayerOptions } from 'leaflet';

export type GridLayerProps = {
  children?: React.ReactNode;
} & GridLayerOptions;
