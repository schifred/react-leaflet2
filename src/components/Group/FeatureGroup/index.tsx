import React, { forwardRef, useCallback } from 'react';
import {
  Layer as LeafletLayer,
  FeatureGroup as LeafletFeatureGroup,
  LayerOptions,
  LeafletEvent,
} from 'leaflet';
import useLayer from '../../../hooks/useLayer';
import { ContainerProvider } from '../../../contexts/containter';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import { FeatureGroupProps } from './types';

export const FeatureGroupEvent = {
  onLayerAdd: 'layeradd',
  onLayerRemove: 'layerremove',
};

type Method = (event: LeafletEvent, featureGroup: LeafletFeatureGroup) => void;
type Methods = {
  onLayerAdd?: Method;
  onLayerRemove?: Method;
};

type FeatureGroupProps = {
  children?: React.ReactNode;
  layers?: LeafletLayer[];
} & Methods &
  LayerOptions;

const FeatureGroup = forwardRef<{ layer?: LeafletFeatureGroup }, FeatureGroupProps>(
  (props, ref) => {
    const { children, layers, onLayerAdd, onLayerRemove, ...options } = props;

    const createLayer = useCallback(() => {
      return new LeafletFeatureGroup(layers, options);
    }, [layers, options]);

    const { layer } = useLayer({
      createLayer,
      ref,
    });

    useQuicklyEvents(layer, { onLayerAdd, onLayerRemove });

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

export default FeatureGroup;
