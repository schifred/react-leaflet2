import React from 'react';
import { Control } from 'leaflet';

export type ControlLayersProps = {
  children: React.ReactNode;
  baseLayers?: Control.LayersObject;
  overlays?: Control.LayersObject;
} & Control.LayersOptions;

export type ControlLayerProp = {
  children: React.ReactNode;
  name: string;
  checked?: boolean;
  overlay?: boolean;
};
