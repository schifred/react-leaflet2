import React, { forwardRef, useCallback, useEffect } from 'react';
import { Polygon as LeafletPolygon } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { PolygonProps } from './types';

const Polygon = forwardRef<LeafletPolygon | undefined, PolygonProps>(
  ({ children, latlngs, fit, onMounted, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return latlngs ? new LeafletPolygon(latlngs, options) : undefined;
    }, [latlngs, options]);

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
      if (map && layer && fit) {
        map?.fitBounds(layer.getBounds());
      }
    }, [map, layer, fit]);

    useEffect(() => {
      if (layer && latlngs) {
        layer.setLatLngs(latlngs);
      }
    }, [latlngs]);

    return layer ? (
      <ContainerProvider value={{ container, overlayContainer: layer }}>
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default Polygon;
