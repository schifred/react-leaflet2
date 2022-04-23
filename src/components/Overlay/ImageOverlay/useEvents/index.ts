import { useMemo } from 'react';
import { ImageOverlay as LeafletImageOverlay, ImageOverlayOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { ImageOverlayProps } from '../types';

const useEvents = (props?: Omit<ImageOverlayProps, 'url' | 'bounds' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: ImageOverlayOptions = {};
    const events: Record<string, EventHandler<any, LeafletImageOverlay>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof ImageOverlayOptions;
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
