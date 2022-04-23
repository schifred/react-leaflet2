import React, { forwardRef, useCallback, useEffect } from 'react';
import { Polygon as LeafletPolygon } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { PolygonProps } from './types';

const Polygon = forwardRef<{ layer?: LeafletPolygon }, PolygonProps>(
  ({ children, latlngs, fit, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletPolygon(latlngs, options);
    }, [latlngs, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useQuicklyEvents(layer, events);

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
