import { forwardRef, useCallback, useEffect } from 'react';
import { Circle as LeafletCircle, CircleMarkerOptions, LatLngExpression } from 'leaflet';
import useLayer from '../hooks/useLayer';

export type CircleLayerProps = {
  latlng: LatLngExpression;
  fit?: boolean;
} & CircleMarkerOptions;

const Circle = forwardRef<{ layer?: LeafletCircle }, CircleLayerProps>(
  ({ latlng, fit, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletCircle(latlng, options);
    }, [latlng, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useEffect(() => {
      if (map && layer && fit) {
        map?.fitBounds(layer.getBounds());
      }
    }, [map, layer, fit]);

    useEffect(() => {
      if (layer && latlng) {
        layer.setLatLng(latlng);
      }
    }, [latlng]);

    const { radius } = options;
    useEffect(() => {
      if (layer && radius) {
        layer.setRadius(radius);
      }
    }, [radius]);

    return null;
  },
);

export default Circle;
