import React from 'react';
import Leaflet, { Rectangle, PolylineOptions, LatLngExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type RectangleProps = {
  latlngs: LatLngBoundsExpression;
  fit?: boolean;
  children?: React.ReactNode;
  onMounted?: (rectangle: Rectangle) => void;
} & PolylineOptions &
  Methods;
