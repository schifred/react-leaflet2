import React from 'react';
import Leaflet, { CircleMarkerOptions, LatLngExpression } from 'leaflet';
import { Methods } from './useEvents/events';

export type CircleProps = {
  latlng: LatLngExpression;
  fit?: boolean;
  children?: React.ReactNode;
} & CircleMarkerOptions &
  Methods;
