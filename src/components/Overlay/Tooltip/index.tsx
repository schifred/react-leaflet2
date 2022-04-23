import { forwardRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { Tooltip as LeafletTooltip } from 'leaflet';
import { useContainerContext } from '../../../contexts/containter';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import type { TooltipProps } from './types';

const Tooltip = forwardRef<{ layer?: LeafletTooltip }, TooltipProps>(
  ({ latlng, visible, children, ...props }, ref) => {
    const { overlayContainer } = useContainerContext();
    const { options, events } = useEvents(props);
    const [layer, setLayer] = useState<LeafletTooltip>();

    useEffect(() => {
      if (overlayContainer) {
        const tooltip = new LeafletTooltip(options);
        overlayContainer?.bindTooltip(tooltip).openTooltip();
        setLayer(tooltip);
      }
    }, [overlayContainer]);

    useEffect(() => {
      return () => {
        if (overlayContainer && layer) {
          overlayContainer?.unbindTooltip();
        }
      };
    }, []);

    useQuicklyEvents(layer, events);

    useEffect(() => {
      if (layer && latlng) {
        layer.setLatLng(latlng);
      }
    }, [latlng]);

    useEffect(() => {
      if (overlayContainer) {
        if (visible) overlayContainer.openTooltip();
        else overlayContainer.closeTooltip();
      }
    }, [visible]);

    // @ts-ignore
    const contentNode = layer?._contentNode;
    return contentNode ? createPortal(children, contentNode) : null;
  },
);

export default Tooltip;
