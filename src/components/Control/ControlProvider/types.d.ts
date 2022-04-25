import React from 'react';
import { Control, LatLngTuple } from 'leaflet';

export type ControlProviderProps = {
  children: React.ReactNode;
} & Pick<Control.ScaleOptions, 'position'>;
