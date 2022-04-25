import React from 'react';
import { Control, LatLngTuple } from 'leaflet';

export type ControlProps = {
  createControl: ({ position }: Pick<Control.ScaleOptions, 'position'>) => Control;
} & Pick<Control.ScaleOptions, 'position'>;
