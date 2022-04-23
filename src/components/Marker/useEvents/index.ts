import { useMemo } from 'react';
import { Marker as LeafletMarker, MarkerOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../types';
import type { MarkerLayerProps } from '../types';

const useEvents = (props?: Omit<MarkerLayerProps, 'latlng' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: MarkerOptions = {};
    const events: Record<string, EventHandler<any, LeafletMarker>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof MarkerOptions;
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
