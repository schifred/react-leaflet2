import { forwardRef, useCallback } from 'react';
import { GridLayer as LeafletGridLayer, GridLayerOptions } from 'leaflet';
import useLayer from '../hooks/useLayer';

type GridLayerProps = {} & GridLayerOptions;

const GridLayer = forwardRef<{ layer?: LeafletGridLayer }, GridLayerProps>(
  ({ ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletGridLayer(options);
    }, [options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    return null;
  },
);

export default GridLayer;
