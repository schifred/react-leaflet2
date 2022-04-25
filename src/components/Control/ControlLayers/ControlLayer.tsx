import React, { useCallback } from 'react';
import { Layer as LeafletLayer, LayerGroup } from 'leaflet';
import { ContainerProvider, useContainerContext } from '../../../contexts/containter';
import { useControlContext } from '../../../contexts/controlLayers';
import { ControlLayerProp } from './types';

const ControlLayer = ({ children, name, checked, overlay }: ControlLayerProp) => {
  const { container } = useContainerContext<LayerGroup>();
  const { control } = useControlContext();

  const addLayer = useCallback(
    (layer: LeafletLayer) => {
      if (!overlay) control?.addBaseLayer(layer, name);
      else control?.addOverlay(layer, name);

      if (checked) container?.addLayer(layer);
      else container?.removeLayer(layer);

      return container;
    },
    [control, container, name, overlay, checked],
  );

  const removeLayer = useCallback(
    (layer: LeafletLayer) => {
      control?.removeLayer(layer);
      container?.removeLayer(layer);

      return container;
    },
    [control, container],
  );

  return (
    <ContainerProvider
      value={{
        container: {
          addLayer,
          removeLayer,
        },
      }}
    >
      {children}
    </ContainerProvider>
  );
};

export default ControlLayer;
