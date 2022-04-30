import React, { forwardRef, useCallback, useEffect } from 'react';
import { CircleMarker as LeafletCircleMarker } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { CircleProps } from './types';

const CircleMarker = forwardRef<{ layer?: LeafletCircleMarker }, CircleProps>(
  ({ children, latlng, fit, onMounted, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletCircleMarker(latlng, options);
    }, [latlng, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useQuicklyEvents(layer, events);

    useEffect(() => {
      if (layer && onMounted) {
        onMounted(layer);
      }
    }, [layer]);

    useEffect(() => {
      if (layer && latlng) {
        layer.setLatLng(latlng);
      }
    }, [latlng]);

    const { radius } = options;
    useEffect(() => {
      if (layer && radius) {
        layer.setRadius(radius);
      }
    }, [radius]);

    return layer ? (
      <ContainerProvider value={{ container, overlayContainer: layer }}>
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default CircleMarker;
