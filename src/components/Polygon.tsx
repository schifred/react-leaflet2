import { forwardRef, useCallback, useEffect } from 'react';
import { Polygon as LeafletPolygon, PolylineOptions, LatLngExpression } from 'leaflet';
import useLayer from '../hooks/useLayer';

export type PolygonLayerProps = {
  latlngs: LatLngExpression[] | LatLngExpression[][] | LatLngExpression[][][];
  fit?: boolean;
} & PolylineOptions;

const Polygon = forwardRef<{ layer?: LeafletPolygon }, PolygonLayerProps>(
  ({ latlngs, fit, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletPolygon(latlngs, options);
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

export default Polygon;
