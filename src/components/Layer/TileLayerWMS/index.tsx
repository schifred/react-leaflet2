import React, { forwardRef, useCallback, useEffect } from 'react';
import { TileLayer as LeafletTileLayer } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { TileLayerWMSProps } from './types';

const TileLayerWMS = forwardRef<LeafletTileLayer.WMS | undefined, TileLayerWMSProps>(
  ({ children, url, params, onMounted, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new LeafletTileLayer.WMS(url, options);
    }, [url, options]);

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
      if (layer && url) {
        layer.setUrl(url);
      }
    }, [url]);

    useEffect(() => {
      if (layer && params) {
        layer.setParams(params, true);
      }
    }, [params]);

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

export default TileLayerWMS;
