import { useMemo } from 'react';
import { CircleMarker, CircleMarkerOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { CircleProps } from '../types';

const useEvents = (props?: Omit<CircleProps, 'latlng' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: CircleMarkerOptions = {};
    const events: Record<string, EventHandler<any, CircleMarker>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof CircleMarkerOptions;
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
