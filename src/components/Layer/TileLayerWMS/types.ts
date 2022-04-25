import React from 'react';
import { WMSOptions, WMSParams } from 'leaflet';
import { Methods } from './useEvents/events';

export type TileLayerWMSProps = {
  url: string;
  children?: React.ReactNode;
  params?: WMSParams;
} & WMSOptions &
  Methods;
