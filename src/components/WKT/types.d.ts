import React from 'react';
import { GeoJSONOptions } from 'leaflet';
import Wicket from 'wicket';
import { PolylineProps } from '../Path/Polyline/types';
import { PolygonProps } from '../Path/Polygon/types';
import { RectangleProps } from '../Path/Rectangle/types';
import { CircleProps } from '../Path/Circle/types';

export type WKTProps = (
  | Omit<PolylineProps, 'latlngs' | 'onMounted'>
  | Omit<PolygonProps, 'latlngs' | 'onMounted'>
  | Omit<RectangleProps, 'latlngs' | 'onMounted'>
  | Omit<CircleProps, 'latlng' | 'onMounted'>
) & {
  wkt: string;
  onMounted?: (wkt: Wicket.Wkt) => void;
  children?: React.ReactNode;
};

export type WKTGroupProps = {
  children?: React.ReactNode;
  wkt: string;
  fit?: boolean;
} & GeoJSONOptions;
