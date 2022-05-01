import React, { forwardRef, useEffect, useCallback } from 'react';
import { VideoOverlay as LeafletVideoOverlay } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import type { VideoOverlayProps } from './types';

const VideoOverlay = forwardRef<LeafletVideoOverlay | undefined, VideoOverlayProps>(
  ({ children, url, bounds, fit, onMounted, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);
    const createLayer = useCallback(() => {
      return new LeafletVideoOverlay(url, bounds, options);
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
        // @ts-ignore
        layer.setUrl(url);
      }
    }, [url]);

    useEffect(() => {
      if (layer && bounds) {
        // @ts-ignore
        layer.setBounds(bounds);
      }
    }, [bounds]);

    return layer ? (
      <ContainerProvider value={{ container, overlayContainer: layer }}>
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default VideoOverlay;
