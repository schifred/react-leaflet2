import React from 'react';
import { GridLayerOptions } from 'leaflet';
import { Methods } from './useEvents/events';

export type GridLayerProps = {
  children?: React.ReactNode;
} & GridLayerOptions &
  Methods;
