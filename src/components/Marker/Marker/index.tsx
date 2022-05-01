import React, { forwardRef, useCallback, useEffect } from 'react';
import { Marker as LeafletMarker, Icon, DivIcon } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import useLayer from '../../../hooks/useLayer';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import type { MarkerProps } from './types';

const _Marker = forwardRef<LeafletMarker | undefined, MarkerProps>(
  ({ latlng, children, marker, ...props }, ref) => {
    const { container } = useContainerContext();
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return marker ? marker : new LeafletMarker(latlng, options);
    }, [latlng, options, marker]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useQuicklyEvents(layer, events);

    const { zIndexOffset, icon, opacity, draggable } = options;
    useEffect(() => {
      if (layer && latlng) {
        layer.setLatLng(latlng);
      }
    }, [latlng]);

    useEffect(() => {
      if (layer && zIndexOffset) {
        layer.setZIndexOffset(zIndexOffset);
      }
    }, [zIndexOffset]);

    useEffect(() => {
      if (layer && icon) {
        layer.setIcon(icon);
      }
    }, [icon]);

    useEffect(() => {
      if (layer && opacity) {
        layer.setOpacity(opacity);
      }
    }, [opacity]);

    useEffect(() => {
      if (layer) {
        if (draggable) layer.dragging?.enable();
        else layer.dragging?.disable();
      }
    }, [draggable]);

    return layer ? (
      <ContainerProvider value={{ container, overlayContainer: layer }}>
        {children}
      </ContainerProvider>
    ) : null;
  },
);

type _MarkerType = typeof _Marker;
interface Marker extends _MarkerType {
  Icon: typeof Icon;
  DivIcon: typeof DivIcon;
}

const Marker = _Marker as Marker;
Marker.Icon = Icon;
Marker.DivIcon = DivIcon;

export default Marker;
