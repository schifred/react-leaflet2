import React, { forwardRef, useCallback } from 'react';
import Leaflet, { FeatureGroup as LeafletFeatureGroup } from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import useLayer from '../../../hooks/useLayer';
import { ContainerProvider } from '../../../contexts/containter';
import { useQuicklyEvents } from '../../../hooks/useEvents';
import useEvents from './useEvents';
import { MarkerClusterProps } from './types';

const MarkerCluster = forwardRef<{ layer?: LeafletFeatureGroup }, MarkerClusterProps>(
  ({ children, ...props }, ref) => {
    const { options, events } = useEvents(props);

    const createLayer = useCallback(() => {
      return new Leaflet.MarkerClusterGroup(options);
    }, [options]);

    const { layer } = useLayer({
      createLayer,
      ref,
    });

    useQuicklyEvents(layer, events);

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

export default MarkerCluster;
