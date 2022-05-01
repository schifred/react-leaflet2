import { useMemo } from 'react';
import { Layer, LayerOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { LayerProps } from '../types';

const useEvents = (props?: Omit<LayerProps, 'layer' | 'onMounted' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: LayerOptions = {};
    const events: Record<string, EventHandler<any, Layer>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        // @ts-ignore
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof LayerOptions;
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
