import React, { forwardRef, useCallback, useEffect } from 'react';
import { Control as LeafletControl } from 'leaflet';
import useControl from '../../../hooks/useControl';
import { ControlProvider } from '../../../contexts/controlLayers';
import { ControlLayersProps } from './types';

const ControlLayers = forwardRef<{ control?: LeafletControl.Layers }, ControlLayersProps>(
  ({ children, baseLayers, overlays, ...options }, ref) => {
    const createControl = useCallback(() => {
      return new LeafletControl.Layers(baseLayers, overlays, options);
    }, [baseLayers, overlays, options]);

    const { map, control } = useControl({
      createControl,
      ref,
    });

    const { position, collapsed } = options;
    useEffect(() => {
      if (control && position) {
        control.setPosition(position);
      }
    }, [position]);

    useEffect(() => {
      if (control && collapsed) {
        if (collapsed) control.collapse();
        else control.expand();
      }
    }, [collapsed]);

    return control ? <ControlProvider value={{ control }}>{children}</ControlProvider> : null;
  },
);

export default ControlLayers;
