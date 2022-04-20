import { forwardRef, useCallback, useEffect } from 'react';
import { Marker as LeafletMarker, MarkerOptions, LatLngExpression } from 'leaflet';
import useLayer from '../hooks/useLayer';

type MarkerLayerProps = {
  latlng: LatLngExpression;
} & MarkerOptions;

const Marker = forwardRef<{ layer?: LeafletMarker }, MarkerLayerProps>(
  ({ latlng, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletMarker(latlng, options);
    }, [latlng, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

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

    return null;
  },
);

export default Marker;
