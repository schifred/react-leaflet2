import React, { forwardRef } from 'react';
import { Control as LeafletControl } from 'leaflet';
import Control from '../Control';
import { ControlProps } from '../Control/types';

const ControlAttribution = forwardRef<
  LeafletControl.Attribution | undefined,
  Omit<ControlProps, 'createControl'>
>((props, ref) => {
  return (
    <Control {...props} createControl={() => new LeafletControl.Attribution(props)} ref={ref} />
  );
});

export default ControlAttribution;
