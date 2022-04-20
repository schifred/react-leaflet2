import { forwardRef, useCallback } from 'react';
import { TileLayer as LeafletTileLayer, TileLayerOptions } from 'leaflet';
import useLayer from '../hooks/useLayer';

type TileLayerProps = {
  url: string;
} & TileLayerOptions;

const TileLayer = forwardRef<{ layer?: LeafletTileLayer }, TileLayerProps>(
  ({ url, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletTileLayer(url, options);
    }, [url, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    return null;
  },
);

export default TileLayer;
