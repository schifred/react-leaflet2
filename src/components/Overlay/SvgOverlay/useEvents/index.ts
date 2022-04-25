import { useMemo } from 'react';
import { SVGOverlay as LeafletSVGOverlay, ImageOverlayOptions } from 'leaflet';
import { Events, Methods } from './events';
import type { EventHandler } from '../../../../types';
import type { SvgOverlayProps } from '../types';

const useEvents = (props?: Omit<SvgOverlayProps, 'url' | 'bounds' | 'fit' | 'children'>) => {
  const { options, events } = useMemo(() => {
    const options: ImageOverlayOptions = {};
    const events: Record<string, EventHandler<any, LeafletSVGOverlay>> = {};
    Object.keys(props || {}).forEach((propName) => {
      const propsTemp = { ...props };
      if (propName in Events) {
        const methodName = propName as keyof Methods;
        const eventName = Events[methodName];
        // @ts-ignore
        events[eventName] = propsTemp[methodName];
      } else {
        const optionName = propName as keyof ImageOverlayOptions;
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
