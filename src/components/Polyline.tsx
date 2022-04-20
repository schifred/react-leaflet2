import { forwardRef, useCallback, useEffect } from 'react';
import { Polyline as LeafletPolyline, PolylineOptions, LatLngExpression } from 'leaflet';
import useLayer from '../hooks/useLayer';

export type PolylineLayerProps = {
  latlngs: LatLngExpression[] | LatLngExpression[][];
  fit?: boolean;
} & PolylineOptions;

const Polyline = forwardRef<{ layer?: LeafletPolyline }, PolylineLayerProps>(
  ({ latlngs, fit, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletPolyline(latlngs, options);
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
        layer.setLatLngs(latlngs);
      }
    }, [latlngs]);

    return null;
  },
);

export default Polyline;
