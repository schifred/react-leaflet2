import React from 'react';
import Leaflet, { ImageOverlayOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type SvgOverlayProps = {
  children?: React.ReactNode;
  bounds: LatLngBoundsExpression;
  fit?: boolean;
} & ImageOverlayOptions &
  Methods;
