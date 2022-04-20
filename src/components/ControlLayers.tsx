import React, { forwardRef, useCallback, useEffect } from 'react';
import { Layer as LeafletLayer, Control as LeafletControl } from 'leaflet';
import useControl from '../hooks/useControl';
import { ContainerProvider, useContainerContext } from '../contexts/containter';
import { ControlProvider, useControlContext } from '../contexts/controlLayers';

type ControlLayersProps = {
  children: React.ReactNode;
  baseLayers?: LeafletControl.LayersObject;
  overlays?: LeafletControl.LayersObject;
} & LeafletControl.LayersOptions;

const _ControlLayers = forwardRef<{ control?: LeafletControl.Layers }, ControlLayersProps>(
  ({ children, baseLayers, overlays, ...options }, ref) => {
    const createControl = useCallback(() => {
      return new LeafletControl.Layers(baseLayers, overlays, options);
    }, [baseLayers, overlays, options]);

    const { map, control } = useControl({
      createControl,
      ref,
    });

    const { collapsed } = options;
    useEffect(() => {
      if (control && collapsed) {
        if (collapsed) control.collapse();
        else control.expand();
      }
    }, [collapsed]);

    return control ? <ControlProvider value={{ control }}>{children}</ControlProvider> : null;
  },
);

const ControlLayer = ({
  children,
  name,
  checked,
  overlay,
}: {
  children: React.ReactNode;
  name: string;
  checked?: boolean;
  overlay?: boolean;
}) => {
  const { container } = useContainerContext();
  const { control } = useControlContext();

  const addLayer = useCallback(
    (layer: LeafletLayer) => {
      if (!overlay) control?.addBaseLayer(layer, name);
      else control?.addOverlay(layer, name);

      if (checked) container?.addLayer(layer);
      else container?.removeLayer(layer);
    },
    [control, container, name, overlay, checked],
  );

  const removeLayer = useCallback(
    (layer: LeafletLayer) => {
      control?.removeLayer(layer);
      container?.removeLayer(layer);
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

type _ControlLayersType = typeof _ControlLayers;

interface ControlLayersType extends _ControlLayersType {
  ControlLayer: typeof ControlLayer;
}

const ControlLayers = _ControlLayers as ControlLayersType;

ControlLayers.ControlLayer = ControlLayer;

export default ControlLayers;
