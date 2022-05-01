import React from 'react';
import Leaflet, { LatLng } from 'leaflet';
import DivOverlayLayer from './DivOverlayLayer';
import { Events, Methods } from './useEvents/events';

export type DivOverlayProps = {
  children?: React.ReactNode;
  latlng: LatLng;
  className?: string;
  fit?: boolean;
  onMounted?: (divOverlayLayer: typeof DivOverlayLayer) => void;
} & Methods;
