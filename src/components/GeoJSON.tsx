import React, { forwardRef, useCallback, useEffect } from 'react';
import { GeoJSON as LeafletGeoJSON, GeoJSONOptions } from 'leaflet';
import { GeoJsonObject } from 'geojson';
import useLayer from '../hooks/useLayer';
import { ContainerProvider } from '../contexts/containter';

type GeoJSONProps = {
  children?: React.ReactNode;
  geojson?: GeoJsonObject;
  fit?: boolean;
} & GeoJSONOptions;

const GeoJSON = forwardRef<{ layer?: LeafletGeoJSON }, GeoJSONProps>(
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

export default GeoJSON;
