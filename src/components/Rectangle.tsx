import { forwardRef, useCallback, useEffect } from 'react';
import { Rectangle as LeafletRectangle, PolylineOptions, LatLngBoundsExpression } from 'leaflet';
import useLayer from '../hooks/useLayer';

export type RectangleLayerProps = {
  latlngs: LatLngBoundsExpression;
  fit?: boolean;
} & PolylineOptions;

const Rectangle = forwardRef<{ layer?: LeafletRectangle }, RectangleLayerProps>(
  ({ latlngs, fit, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletRectangle(latlngs, options);
    }, [latlngs, options]);

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
      if (layer && latlngs) {
        layer.setBounds(latlngs);
      }
    }, [latlngs]);

    return null;
  },
);

export default Rectangle;
