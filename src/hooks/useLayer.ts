import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Layer as LeafletLayer } from 'leaflet';
import { useMapContext } from '../contexts/map';
import { useContainerContext } from '../contexts/containter';

const useLayer = <Layer extends LeafletLayer>({
  createLayer,
  ref,
}: {
  createLayer: () => Layer | undefined;
  ref: React.ForwardedRef<Layer | undefined>;
}) => {
  const [layer, setLayer] = useState<Layer>();
  const { map } = useMapContext();
  const { container } = useContainerContext();

  useImperativeHandle(ref, () => layer, [layer]);

  useEffect(() => {
    if (container) {
      const layer = createLayer();
      if (layer) {
        container?.addLayer(layer);
        setLayer(layer);
      }

      return () => {
        if (container && layer) {
          container?.removeLayer(layer);
        }
      };
    }
  }, [container]);

  return {
    map,
    layer,
  };
};

export default useLayer;
