import { forwardRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import DivOverlayLayer from './DivOverlayLayer';
import useEvents from './useEvents';
import type { DivOverlayProps } from './types';

const DivOverlay = forwardRef<typeof DivOverlayLayer | undefined, DivOverlayProps>(
  ({ children, fit, latlng, onMounted, ...props }, ref) => {
    const { options, events } = useEvents(props);
    const createLayer = useCallback(() => {
      // @ts-ignore
      return new DivOverlayLayer({ ...options, latlng });
    }, [options, latlng]);

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
      if (map && latlng && fit) {
        map?.setView(latlng);
      }
    }, [map, latlng, fit]);

    useEffect(() => {
      if (layer && latlng) {
        layer.setLatlng(latlng);
      }
    }, [latlng]);

    return layer?._container ? createPortal(children, layer?._container) : null;
  },
);

export default DivOverlay;
