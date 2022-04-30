import React from 'react';
import Leaflet, { Polygon, PolylineOptions, LatLngExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type PolygonProps = {
  latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
  fit?: boolean;
  children?: React.ReactNode;
  onMounted?: (polygon: Polygon) => void;
} & PolylineOptions &
  Methods;
