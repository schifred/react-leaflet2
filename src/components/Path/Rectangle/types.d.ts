import React from 'react';
import Leaflet, { PolylineOptions, LatLngExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type RectangleProps = {
  latlngs: LatLngBoundsExpression;
  fit?: boolean;
  children?: React.ReactNode;
} & PolylineOptions &
  Methods;
