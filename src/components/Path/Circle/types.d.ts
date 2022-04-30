import React from 'react';
import Leaflet, { CircleMarker, CircleMarkerOptions, LatLngExpression } from 'leaflet';
import { Methods } from './useEvents/events';

export type CircleProps = {
  latlng: LatLngExpression;
  fit?: boolean;
  children?: React.ReactNode;
  onMounted?: (circle: CircleMarker) => void;
} & CircleMarkerOptions &
  Methods;
