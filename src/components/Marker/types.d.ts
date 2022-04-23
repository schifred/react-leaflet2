import React from 'react';
import Leaflet, { MapOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type MarkerProps = {
  latlng: LatLngExpression;
  children?: React.ReactNode;
} & MarkerOptions &
  Methods;
