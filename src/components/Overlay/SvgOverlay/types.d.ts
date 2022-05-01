import React from 'react';
import Leaflet, { SVGOverlay, ImageOverlayOptions, LatLngBoundsExpression } from 'leaflet';
import { Events, Methods } from './useEvents/events';

export type SvgOverlayProps = {
  children?: React.ReactNode;
  bounds: LatLngBoundsExpression;
  fit?: boolean;
  onMounted?: (svgOverlay: SVGOverlay) => void;
} & ImageOverlayOptions &
  Methods;
