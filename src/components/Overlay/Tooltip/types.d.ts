import React from 'react';
import Leaflet, { ToolbarOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type TooltipProps = {
  children?: React.ReactNode;
  visible?: boolean;
  latlng?: LatLngExpression;
} & ToolbarOptions &
  Methods;
