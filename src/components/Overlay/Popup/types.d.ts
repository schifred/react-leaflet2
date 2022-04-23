import React from 'react';
import Leaflet, { PopupOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type PopupProps = {
  children?: React.ReactNode;
  visible?: boolean;
  latlng?: LatLngExpression;
} & PopupOptions &
  Methods;
