import { forwardRef, useCallback } from 'react';
import { TileLayer as LeafletTileLayer, WMSOptions } from 'leaflet';
import useLayer from '../hooks/useLayer';

type TileLayerWMSProps = {
  url: string;
} & WMSOptions;

const TileLayerWMS = forwardRef<{ layer?: LeafletTileLayer.WMS }, TileLayerWMSProps>(
  ({ url, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletTileLayer.WMS(url, options);
    }, [url, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    return null;
  },
);

export default TileLayerWMS;
