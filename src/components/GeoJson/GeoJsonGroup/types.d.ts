import React from 'react';
import { GeoJSON, GeoJSONOptions, PathOptions, StyleFunction } from 'leaflet';
import { GeoJsonObject } from 'geojson';
import { Methods } from './useEvents/events';

export type GeoJsonGroupProps<P> = {
  children?: React.ReactNode;
  geojson?: GeoJsonObject;
  fit?: boolean;
  style?: PathOptions | StyleFunction<P>;
  onMounted?: (geojson: GeoJSON) => void;
} & GeoJSONOptions &
  Methods;
