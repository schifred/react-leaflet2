import React, { forwardRef, useCallback, useEffect } from 'react';
import { GeoJSON as LeafletGeoJSON } from 'leaflet';
import { ContainerProvider } from '../../contexts/containter';
import useLayer from '../../hooks/useLayer';
import { GeoJsonGroupProps } from './types';

const GeoJsonGroup = forwardRef<{ layer?: LeafletGeoJSON }, GeoJsonGroupProps>(
  ({ children, geojson, fit, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletGeoJSON(geojson, options);
    }, [geojson, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useEffect(() => {
      if (map && layer && fit) {
        map?.fitBounds(layer.getBounds());
      }
    }, [map, layer, fit]);

    const { style } = options;
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
