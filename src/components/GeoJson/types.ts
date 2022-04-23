import React from 'react';
import { GeoJSONOptions } from 'leaflet';
import { GeoJsonObject } from 'geojson';
import { WKTProps } from '../WKT/types';

export type GeoJsonProps = {
  geojson?: GeoJsonObject;
} & Omit<WKTProps, 'wkt'>;

export type GeoJsonGroupProps = {
  children?: React.ReactNode;
  geojson?: GeoJsonObject;
  fit?: boolean;
} & GeoJSONOptions;
