import { useMemo } from 'react';
import { LayerGroup, LayerOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { LayerGroupProps } from '../types';

const useEvents = (props?: Omit<LayerGroupProps, 'latlng' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: LayerOptions = {};
    const events: Record<string, EventHandler<any, LayerGroup>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof LayerOptions;
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
