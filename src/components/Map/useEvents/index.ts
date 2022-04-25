import { useMemo } from 'react';
import { Map as LeafletMap, MapOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../types';
import type { MapProps } from '../types';

const useEvents = (map?: LeafletMap, props?: Omit<MapProps, 'style' | 'children' | 'bounds'>) => {
  const { options, events } = useMemo(() => {
    const options: MapOptions = {};
    const events: Record<string, EventHandler<any, LeafletMap>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        // @ts-ignore
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof MapOptions;
        // @ts-ignore
        options[optionName] = propsTemp[optionName];
      }
    });

    return {
      options,
      events,
    };
  }, [props]);

  return {
    options,
    events,
  };
};

export default useEvents;
