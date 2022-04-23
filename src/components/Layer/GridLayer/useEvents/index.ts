import { useMemo } from 'react';
import { GridLayer, GridLayerOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { GridLayerProps } from '../types';

const useEvents = (props?: Omit<GridLayerProps, 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: GridLayerOptions = {};
    const events: Record<string, EventHandler<any, GridLayer>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof GridLayerOptions;
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
