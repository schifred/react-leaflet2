import React from 'react';
import Leaflet, { MapOptions, LatLngBoundsExpression } from 'leaflet';
import { Methods } from './useEvents/events';

export type MapProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  bounds?: LatLngBoundsExpression;
} & MapOptions &
  Methods;
