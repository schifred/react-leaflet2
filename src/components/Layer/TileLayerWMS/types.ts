import React from 'react';
import { TileLayer, WMSOptions, WMSParams } from 'leaflet';
import { Methods } from './useEvents/events';

export type TileLayerWMSProps = {
  url: string;
  children?: React.ReactNode;
  params?: WMSParams;
  onMounted?: (tileLayerWMS: TileLayer.WMS) => void;
} & WMSOptions &
  Methods;
