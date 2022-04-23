import React from 'react';
import { GeoJSONOptions } from 'leaflet';
import { PolylineProps } from '../Path/Polyline/types';
import { PolygonProps } from '../Path/Polygon/types';
import { RectangleProps } from '../Path/Rectangle/types';
import { CircleProps } from '../Path/Circle/types';

export type WKTProps = (
  | Omit<PolylineProps, 'latlngs'>
  | Omit<PolygonProps, 'latlngs'>
  | Omit<RectangleProps, 'latlngs'>
  | Omit<CircleProps, 'latlngs'>
) & {
  wkt: string;
  children?: React.ReactNode;
};

export type WKTGroupProps = {
  children?: React.ReactNode;
  wkt: string;
  fit?: boolean;
} & GeoJSONOptions;
