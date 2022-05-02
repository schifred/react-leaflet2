import React, { forwardRef, useCallback, useEffect } from 'react';
import { Path } from 'leaflet';
// @ts-ignore
import Wicket from 'wicket';
import 'wicket/wicket-leaflet';
import { ContainerProvider, useContainerContext } from '../../contexts/containter';
import useLayer from '../../hooks/useLayer';
import { WKTProps } from './types';

/**
 * 单个图层
 */
const WKT = forwardRef<Path | undefined, WKTProps>(
  ({ children, wkt, fit, onMounted, ...props }, ref) => {
    const { container } = useContainerContext();
    const createLayer = useCallback(() => {
      return new Wicket.Wkt(wkt).toObject(props);
    }, [wkt, props]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

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

    return layer ? (
      <ContainerProvider value={{ container, overlayContainer: layer }}>
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default WKT;
