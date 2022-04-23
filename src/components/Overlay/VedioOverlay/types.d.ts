import React from 'react';
import Leaflet, { VideoOverlayOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type VideoOverlayProps = {
  children?: React.ReactNode;
  url: string | string[];
  bounds: LatLngBoundsExpression;
  fit?: boolean;
} & VideoOverlayOptions &
  Methods;
