import { useMemo } from 'react';
import { Polyline, PolylineOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { PolylineProps } from '../types';

const useEvents = (props?: Omit<PolylineProps, 'latlngs' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: PolylineOptions = {};
    const events: Record<string, EventHandler<any, Polyline>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof PolylineOptions;
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
