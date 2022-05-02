import React, { forwardRef } from 'react';
import { Control as LeafletControl } from 'leaflet';
import Control from '../Control';
import { ControlProps } from '../Control/types';

const ControlZoom = forwardRef<
  LeafletControl.Zoom | undefined,
  Omit<ControlProps, 'createControl'>
>((props, ref) => {
  return <Control {...props} createControl={() => new LeafletControl.Zoom(props)} ref={ref} />;
});

export default ControlZoom;
