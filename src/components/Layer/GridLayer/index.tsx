import React, { forwardRef, useCallback, useEffect } from 'react';
import { GridLayer as LeafletGridLayer } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { GridLayerProps } from './types';

const GridLayer = forwardRef<LeafletGridLayer | undefined, GridLayerProps>(
  ({ children, onMounted, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletGridLayer(options);
    }, [options]);

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

    const { opacity } = options;
    useEffect(() => {
      if (layer && opacity) {
        layer.setOpacity(opacity);
      }
    }, [opacity]);

    return layer ? (
      <ContainerProvider value={{ container, overlayContainer: layer }}>
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default GridLayer;
