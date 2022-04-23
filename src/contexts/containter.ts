import { createContext, useContext } from 'react';
import {
  Layer,
  Map as LeafletMap,
  FeatureGroup as LeafletFeatureGroup,
  LayerGroup as LeafletLayerGroup,
} from 'leaflet';

type Container = LeafletMap | LeafletFeatureGroup | LeafletLayerGroup;
type OverlayContainer = Layer;

type ContainerContextType = {
  container: Container;
  overlayContainer?: OverlayContainer;
};

const ContainerContext = createContext<ContainerContextType>({} as ContainerContextType);

export const ContainerProvider = ContainerContext.Provider;

export const useContainerContext = <T extends Container>() => {
  const { container, overlayContainer } = useContext(ContainerContext);
  return {
    container: container as T,
    overlayContainer,
  };
};
