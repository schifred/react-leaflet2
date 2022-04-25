import { useMemo } from 'react';
import { Polygon, PolylineOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { PolygonProps } from '../types';

const useEvents = (props?: Omit<PolygonProps, 'latlngs' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: PolylineOptions = {};
    const events: Record<string, EventHandler<any, Polygon>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        // @ts-ignore
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof PolylineOptions;
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
