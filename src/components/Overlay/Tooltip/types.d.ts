import React from 'react';
import Leaflet, { Tooltip, TooltipOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type TooltipProps = {
  children?: React.ReactNode;
  visible?: boolean;
  latlng?: LatLngExpression;
  onMounted?: (tooltip: Tooltip) => void;
} & TooltipOptions &
  Methods;
