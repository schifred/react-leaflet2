import React, { forwardRef, useEffect, useCallback } from 'react';
import { ImageOverlay as LeafletImageOverlay, latLngBounds } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import type { ImageOverlayProps } from './types';

const ImageOverlay = forwardRef<LeafletImageOverlay | undefined, ImageOverlayProps>(
  ({ children, url, bounds, fit, onMounted, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);
    const createLayer = useCallback(() => {
      return new LeafletImageOverlay(url, bounds, options);
    }, [url, bounds, options]);

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

    useEffect(() => {
      if (map && layer && fit) {
        map?.fitBounds(bounds);
      }
    }, [map, layer, bounds, fit]);

    useEffect(() => {
      if (layer && url) {
        layer.setUrl(url);
      }
    }, [url]);

    useEffect(() => {
      if (layer && bounds) {
        // @ts-ignore
        layer.setBounds(latLngBounds(bounds));
      }
    }, [bounds]);

    return layer ? (
      <ContainerProvider value={{ container, overlayContainer: layer }}>
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default ImageOverlay;
