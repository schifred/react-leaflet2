import React from 'react';
import Leaflet, { PolylineOptions, LatLngExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type PolylineProps = {
  latlngs: LatLngExpression[] | LatLngExpression[][];
  fit?: boolean;
  children?: React.ReactNode;
} & PolylineOptions;
