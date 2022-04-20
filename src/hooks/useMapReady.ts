import { useEffect } from 'react';
import { Map as LeafletMap } from 'leaflet';
import { useMapContext } from '../contexts/map';

const useMapReady = (onMapReady: (map: LeafletMap) => void, deps?: any[]) => {
  const { map } = useMapContext();

  useEffect(() => {
    if (map && onMapReady) {
      onMapReady(map);
    }
  }, [map, ...(deps || [])]);
};

export default useMapReady;
