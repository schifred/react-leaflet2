import { createContext, useContext } from 'react';
import {
  Layer,
  Map as LeafletMap,
  FeatureGroup as LeafletFeatureGroup,
  LayerGroup as LeafletLayerGroup,
} from 'leaflet';

type Container = LeafletMap | LeafletFeatureGroup | LeafletLayerGroup;

type ContainerContextType = {
  container: Container;
};

const ContainerContext = createContext<ContainerContextType>({} as ContainerContextType);

export const ContainerProvider = ContainerContext.Provider;

export const useContainerContext = <T extends Container>() => {
  const { container } = useContext(ContainerContext);
  return {
    container: container as T,
  };
};
