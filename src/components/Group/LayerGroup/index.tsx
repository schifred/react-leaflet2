import React, { forwardRef, useCallback } from 'react';
import { FeatureGroup as LeafletLayerGroup } from 'leaflet';
import useLayer from '../../../hooks/useLayer';
import { ContainerProvider } from '../../../contexts/containter';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { LayerGroupProps } from './types';

const LayerGroup = forwardRef<{ layer?: LeafletLayerGroup }, LayerGroupProps>(
  ({ children, layers, ...props }, ref) => {
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletLayerGroup(layers, options);
    }, [layers, options]);

    const { map, layer } = useLayer({
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

export default LayerGroup;
