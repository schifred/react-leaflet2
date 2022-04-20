import { createContext, useContext } from 'react';
import { Control } from 'leaflet';

type ControlContextType = {
  control: Control.Layers;
};

const ControlContext = createContext<ControlContextType>({} as ControlContextType);

export const ControlProvider = ControlContext.Provider;

export const useControlContext = () => {
  return useContext(ControlContext);
};
