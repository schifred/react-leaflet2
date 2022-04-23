import React from 'react';
import { Control, LatLngTuple } from 'leaflet';

export type Record = {
  title: string;
  loc: LatLngTuple;
};

export type ControlSearchProps = {
  onSearch: (text: string) => Promise<Record[]>;
} & Pick<Control.ScaleOptions, 'position'>;
