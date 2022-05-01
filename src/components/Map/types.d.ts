import React from 'react';
import Leaflet, { Map, MapOptions, LatLngBoundsExpression } from 'leaflet';
import { Methods } from './useEvents/events';

export type MapProps = {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  bounds?: LatLngBoundsExpression;
  onMounted?: (map: Map) => void;
} & MapOptions &
  Methods;
