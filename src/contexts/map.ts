import { createContext, useContext } from 'react';
import { Map as LeafletMap } from 'leaflet';

type MapContextType = {
  map: LeafletMap;
};

const MapContext = createContext<MapContextType>({} as MapContextType);

export const MapProvider = MapContext.Provider;

export const useMapContext = () => {
  return useContext(MapContext);
};
