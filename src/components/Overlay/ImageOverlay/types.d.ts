import React from 'react';
import Leaflet, { ImageOverlayOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type ImageOverlayProps = {
  children?: React.ReactNode;
  url: string;
  bounds: LatLngBoundsExpression;
  fit?: boolean;
} & ImageOverlayOptions &
  Methods;
