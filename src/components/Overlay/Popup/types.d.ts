import React from 'react';
import Leaflet, { Popup, PopupOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type PopupProps = {
  children?: React.ReactNode;
  visible?: boolean;
  latlng?: LatLngExpression;
  onMounted?: (popup: Popup) => void;
} & PopupOptions &
  Methods;
