import { useRef, useCallback, useEffect } from 'react';
import { Map as LeafletMap, Layer as LeafletLayer, LeafletEvent } from 'leaflet';

export type Events = Record<string, (e: LeafletEvent) => void>;

const useEvents = <T extends LeafletMap | LeafletLayer>(src?: T, methods?: Methods<T>) => {
  const eventHandlersRef = useRef<Events>({});

  const unregister = useCallback((src?: T) => {
    if (src) {
      Object.keys(eventHandlersRef.current).forEach((eventName) => {
        const handler = eventHandlersRef.current[eventName];
        src.off(eventName, handler);
        delete eventHandlersRef.current[eventName];
      });
    }
  }, []);

  const register = useCallback(
    (src?: T, events?: Events) => {
      if (src && events) {
        Object.keys(events).forEach((eventName) => {
          src.on(eventName, events[eventName]);
          eventHandlersRef.current[eventName] = events[eventName];
        });
      }

      return unregister;
    },
    [unregister],
  );

  const createHandler = useCallback(
    (methodName: keyof Methods<T>) => {
      return (event: LeafletEvent) => {
        if (methods?.[methodName]) methods[methodName]?.(event, src!);
      };
    },
    [src],
  );

  useEffect(() => {
    const events: Events = {};
    Object.keys(methods || {}).forEach((eventName) => {
      events[eventName] = createHandler(eventName);
    });
    const unregister = register(src, events);

    return () => {
      unregister(src);
    };
  }, [src, createHandler]);

  return {
    register,
  };
};

type Methods<T> = Record<string, undefined | ((event: LeafletEvent, src: T) => void)>;

export const useQuicklyEvents = <T extends LeafletMap | LeafletLayer>(
  src?: T,
  methods?: Methods<T>,
) => {
  const { register } = useEvents();
  const unregisterRef = useRef<(src?: T) => void>();

  const createHandler = useCallback(
    (methodName: keyof Methods<T>, src) => {
      return (event: LeafletEvent) => {
        if (methods?.[methodName]) methods[methodName]?.(event, src);
      };
    },
    [methods],
  );

  useEffect(() => {
    if (src) {
      const events: Events = {};
      Object.keys(methods || {}).forEach((eventName) => {
        events[eventName] = createHandler(eventName, src);
      });
      unregisterRef.current = register(src, events);
    }
  }, [src, createHandler, methods]);

  useEffect(() => {
    return () => {
      unregisterRef.current?.(src);
    };
  }, []);
};

export default useEvents;
