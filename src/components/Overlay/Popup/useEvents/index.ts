import { useMemo } from 'react';
import { Popup as LeafletPopup, PopupOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { PopupProps } from '../types';

const useEvents = (props?: Omit<PopupProps, 'latlng' | 'visible' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: PopupOptions = {};
    const events: Record<string, EventHandler<any, LeafletPopup>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof PopupOptions;
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
