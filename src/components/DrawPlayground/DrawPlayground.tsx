import React, { forwardRef } from 'react';
import { FeatureGroup as LeafletFeatureGroup } from 'leaflet';
import FeatureGroup from '../Group/FeatureGroup';
import ControlDraw from './ControlDraw';
import { DrawPlaygroundProps } from './types';

const DrawPlayground = forwardRef<LeafletFeatureGroup | undefined, DrawPlaygroundProps>(
  ({ children, ...props }, ref) => {
    return (
      <FeatureGroup ref={ref}>
        <ControlDraw {...props} />
        {children}
      </FeatureGroup>
    );
  },
);

export default DrawPlayground;
