import React, { forwardRef } from 'react';
import { Control as LeafletControl } from 'leaflet';
import Control from '../Control';
import { ControlProps } from '../Control/types';

const ControlScale = forwardRef<
  LeafletControl.Scale | undefined,
  Omit<ControlProps, 'createControl'>
>((props, ref) => {
  return <Control {...props} createControl={() => new LeafletControl.Scale(props)} ref={ref} />;
});

export default ControlScale;
