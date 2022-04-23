import React, { forwardRef, useCallback } from 'react';
import { Layer as LeafletLayer, FeatureGroup as LeafletLayerGroup, LayerOptions } from 'leaflet';
import useLayer from '../../../hooks/useLayer';
import { ContainerProvider } from '../../../contexts/containter';

type LayerGroupProps = {
  children?: React.ReactNode;
  layers?: LeafletLayer[];
} & LayerOptions;

const LayerGroup = forwardRef<{ layer?: LeafletLayerGroup }, LayerGroupProps>(
  ({ children, layers, ...options }, ref) => {
    const createLayer = useCallback(() => {
      return new LeafletLayerGroup(layers, options);
    }, [layers, options]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    return layer ? (
      <ContainerProvider
        value={{
          container: layer,
        }}
      >
        {children}
      </ContainerProvider>
    ) : null;
  },
);

export default LayerGroup;
