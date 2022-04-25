import { useMemo } from 'react';
import { Rectangle, PolylineOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { RectangleProps } from '../types';

const useEvents = (props?: Omit<RectangleProps, 'latlngs' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: PolylineOptions = {};
    const events: Record<string, EventHandler<any, Rectangle>> = {};
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
