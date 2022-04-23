import { useMemo } from 'react';
import { VideoOverlay as LeafletVideoOverlay, VideoOverlayOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { VideoOverlayProps } from '../types';

const useEvents = (props?: Omit<VideoOverlayProps, 'url' | 'bounds' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: VideoOverlayOptions = {};
    const events: Record<string, EventHandler<any, LeafletVideoOverlay>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof VideoOverlayOptions;
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
