import React from 'react';
import { WMSOptions, WMSParams } from 'leaflet';

export type TileLayerWMSProps = {
  url: string;
  children?: React.ReactNode;
  params?: WMSParams;
} & WMSOptions;
