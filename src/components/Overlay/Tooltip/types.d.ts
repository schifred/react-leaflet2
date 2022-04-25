import React from 'react';
import Leaflet, { TooltipOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type TooltipProps = {
  children?: React.ReactNode;
  visible?: boolean;
  latlng?: LatLngExpression;
} & TooltipOptions &
  Methods;
