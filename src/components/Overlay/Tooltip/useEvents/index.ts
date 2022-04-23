import { useMemo } from 'react';
import { Tooltip as LeafletTooltip, TooltipOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { TooltipProps } from '../types';

const useEvents = (props?: Omit<TooltipProps, 'latlng' | 'visible' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: TooltipOptions = {};
    const events: Record<string, EventHandler<any, LeafletTooltip>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof TooltipOptions;
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
