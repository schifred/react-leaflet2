import { useMemo } from 'react';
import { GridLayer, WMSOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { TileLayerWMSProps } from '../types';

const useEvents = (props?: Omit<TileLayerWMSProps, 'url' | 'params' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: WMSOptions = {};
    const events: Record<string, EventHandler<any, GridLayer>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        // @ts-ignore
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof WMSOptions;
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
