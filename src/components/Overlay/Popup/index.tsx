import { forwardRef, useEffect, useState, useImperativeHandle } from 'react';
import { createPortal } from 'react-dom';
import { Popup as LeafletPopup } from 'leaflet';
import { useContainerContext } from '../../../contexts/containter';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import type { PopupProps } from './types';

const Popup = forwardRef<LeafletPopup | undefined, PopupProps>(
  ({ latlng, visible, children, onMounted, ...props }, ref) => {
    const { overlayContainer } = useContainerContext();
    const { options, events } = useEvents(props);
    const [layer, setLayer] = useState<LeafletPopup>();

    useImperativeHandle(ref, () => layer, [layer]);

    useEffect(() => {
      if (layer && onMounted) {
        onMounted(layer);
      }
    }, [layer]);

    useEffect(() => {
      if (overlayContainer) {
        const popup = new LeafletPopup(options);
        overlayContainer?.bindPopup(popup);
        setLayer(popup);
      }
    }, [overlayContainer]);

    useEffect(() => {
      return () => {
        if (overlayContainer && layer) {
          overlayContainer?.unbindPopup();
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
        if (visible) overlayContainer.openPopup();
        else overlayContainer.closePopup();
      }
    }, [visible]);

    useEffect(() => {
      if (layer) {
        layer.update();
      }
    }, [children]);

    // @ts-ignore
    const contentNode = layer?._contentNode;
    return contentNode ? createPortal(children, contentNode) : null;
  },
);

export default Popup;
