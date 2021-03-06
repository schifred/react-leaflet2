import { forwardRef, useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { SVGOverlay as LeafletSVGOverlay, latLngBounds } from 'leaflet';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import type { SvgOverlayProps } from './types';

const SvgOverlay = forwardRef<LeafletSVGOverlay | undefined, SvgOverlayProps>(
  ({ children, bounds, fit, onMounted, ...props }, ref) => {
    const [svgContainer, setSvgContainer] = useState<SVGElement>();
    const { options, events } = useEvents(props);
    const createLayer = useCallback(() => {
      const svgContainer = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      svgContainer.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      setSvgContainer(svgContainer);
      return new LeafletSVGOverlay(svgContainer, bounds, options);
    }, [bounds, options]);

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
        map?.fitBounds(bounds);
      }
    }, [map, layer, bounds, fit]);

    useEffect(() => {
      if (layer && bounds) {
        // @ts-ignore
        layer.setBounds(latLngBounds(bounds));
      }
    }, [bounds]);

    return svgContainer ? createPortal(children, svgContainer) : null;
  },
);

export default SvgOverlay;
