import { useMemo } from 'react';
import { TileLayer, TileLayerOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { TileLayerProps } from '../types';

const useEvents = (props?: Omit<TileLayerProps, 'url' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: TileLayerOptions = {};
    const events: Record<string, EventHandler<any, TileLayer>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        // @ts-ignore
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof TileLayerOptions;
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
