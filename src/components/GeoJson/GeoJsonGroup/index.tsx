import React, { forwardRef, useCallback, useEffect } from 'react';
import { Marker, GeoJSON as LeafletGeoJSON, PathOptions } from 'leaflet';
import { ContainerProvider } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import { DefaultIcon } from '../../_common/icon';
import useEvents from './useEvents';
import { GeoJsonGroupProps } from './types';

const GeoJsonGroup = forwardRef<LeafletGeoJSON | undefined, GeoJsonGroupProps<PathOptions>>(
  ({ children, geojson, fit, onMounted, style, ...props }, ref) => {
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletGeoJSON(geojson, {
        pointToLayer: (geojson, latlng) =>
          new Marker(latlng, {
            icon: DefaultIcon,
          }),
        ...options,
      });
    }, [geojson, options]);

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
        map?.fitBounds(layer.getBounds());
      }
    }, [map, layer, fit]);

    useEffect(() => {
      if (layer) {
        if (!style) layer.resetStyle();
        else layer.setStyle(style);
      }
    }, [style]);

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

export default GeoJsonGroup;
