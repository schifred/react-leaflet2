import React, { forwardRef, useCallback } from 'react';
import { FeatureGroup as LeafletFeatureGroup } from 'leaflet';
import useLayer from '../../../hooks/useLayer';
import { ContainerProvider } from '../../../contexts/containter';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { FeatureGroupProps } from './types';

const FeatureGroup = forwardRef<{ layer?: LeafletFeatureGroup }, FeatureGroupProps>(
  ({ children, layers, ...props }, ref) => {
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletFeatureGroup(layers, options);
    }, [layers, options]);

    const { layer } = useLayer({
      createLayer,
      ref,
    });

    useQuicklyEvents(layer, events);

    return layer ? (
      <ContainerProvider
        value={{
          container: layer,
        }}
      >
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default FeatureGroup;
