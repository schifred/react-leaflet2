import { useMemo } from 'react';
import { FeatureGroup, LayerOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { MarkerClusterProps } from '../types';

const useEvents = (props?: Omit<MarkerClusterProps, 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: LayerOptions = {};
    const events: Record<string, EventHandler<any, FeatureGroup>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        // @ts-ignore
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
