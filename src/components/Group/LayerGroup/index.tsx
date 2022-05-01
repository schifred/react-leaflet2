import React, { forwardRef, useCallback, useEffect } from 'react';
import { LayerGroup as LeafletLayerGroup } from 'leaflet';
import useLayer from '../../../hooks/useLayer';
import { ContainerProvider } from '../../../contexts/containter';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { LayerGroupProps } from './types';

const LayerGroup = forwardRef<LeafletLayerGroup | undefined, LayerGroupProps>(
  ({ children, layers, onMounted, ...props }, ref) => {
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletLayerGroup(layers, options);
    }, [layers, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useEffect(() => {
      if (layer && onMounted) {
        onMounted(layer);
      }
    }, [layer]);

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
