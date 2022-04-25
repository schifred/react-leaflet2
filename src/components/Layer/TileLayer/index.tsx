import React, { forwardRef, useCallback, useEffect } from 'react';
import { TileLayer as LeafletTileLayer } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { TileLayerProps } from './types';

const TileLayer = forwardRef<{ layer?: LeafletTileLayer }, TileLayerProps>(
  ({ children, url, createTileLayer, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      if (createTileLayer) {
        return createTileLayer(options);
      }

      return new LeafletTileLayer(url, options);
    }, [url, createTileLayer, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useQuicklyEvents(layer, events);

    useEffect(() => {
      if (layer && url) {
        layer.setUrl(url);
      }
    }, [url]);

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

export default TileLayer;
