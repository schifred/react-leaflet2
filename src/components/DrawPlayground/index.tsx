import React, { forwardRef, useCallback, useEffect, useRef, useImperativeHandle } from 'react';
import {
  FeatureGroup as LeafletFeatureGroup,
  Control as LeafletControl,
  LeafletEvent,
} from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import FeatureGroup from '../Group/FeatureGroup';
import { Events as FeatureGroupEvents } from '../Group/FeatureGroup/useEvents/events';
import useControl from '../../hooks/useControl';
import useEvents, { Events } from '../../hooks/useEvents';
import { useContainerContext } from '../../contexts/containter';
import './language';
import { ControlDrawEvent, Methods } from './events';
import { ControlDrawProps } from './types';

const ControlDraw = forwardRef<
  { control?: LeafletControl.Draw; featureGroup: LeafletFeatureGroup },
  ControlDrawProps
>(({ draw = {}, edit, position = 'topleft', children, ...rest }, ref) => {
  const { container } = useContainerContext<LeafletFeatureGroup>();
  const controlRef = useRef<{ control?: LeafletControl.Draw }>({});
  const { register } = useEvents();

  const createControl = useCallback(() => {
    if (!container) return;

    return new LeafletControl.Draw({
      draw,
      position,
      edit: {
        ...edit,
        featureGroup: container,
      },
    });
  }, [container, draw, position, edit]);

  const { map } = useControl({
    createControl,
    // @ts-ignore
    controlRef,
  });

  useImperativeHandle(
    ref,
    () => {
      return {
        control: controlRef.current.control,
        featureGroup: container,
      };
    },
    [controlRef],
  );

  const createHandler = useCallback(
    (methodName: keyof Methods) => {
      return (event: LeafletEvent) => {
        // @ts-ignore
        if (methods[methodName]) methods[methodName]?.(event, container);
      };
    },
    [container],
  );

  const { onChange, onCreated, onEdited, ...methods } = rest;
  const handleChange = useCallback(
    (event: LeafletEvent) => {
      if (onChange) onChange(event, container);
    },
    [container],
  );

  const handleCreated = useCallback(
    (event: LeafletEvent) => {
      if (container) container.addLayer(event?.layer);
      if (onCreated) onCreated(event, container);
    },
    [container],
  );

  const handleEdited = useCallback(
    (event: LeafletEvent) => {
      if (onEdited) onEdited(event, container);
      handleChange(event);
    },
    [container],
  );

  useEffect(() => {
    const unregister = register(container, {
      [FeatureGroupEvents.onLayerAdd]: handleChange,
      [FeatureGroupEvents.onLayerRemove]: handleChange,
    });

    return () => {
      unregister(container);
    };
  }, [container, createHandler]);

  useEffect(() => {
    const events: Events = {};
    Object.keys(methods || {}).forEach((eventName) => {
      // @ts-ignore
      events[ControlDrawEvent[eventName]] = createHandler(eventName);
    });

    const unregister = register(map, {
      [ControlDrawEvent.onCreated]: handleCreated,
      [ControlDrawEvent.onEdited]: handleEdited,
      ...events,
    });

    return () => {
      unregister(map);
    };
  }, [handleCreated, createHandler]);

  return null;
});

type DrawPlaygroundProps = ControlDrawProps & {
  children?: React.ReactNode;
};

const _DrawPlayground = forwardRef<{ control?: LeafletControl.Draw }, DrawPlaygroundProps>(
  ({ children, ...props }, ref) => {
    return (
      <FeatureGroup>
        {/* @ts-ignore */}
        <ControlDraw {...props} ref={ref} />
        {children}
      </FeatureGroup>
    );
  },
);

type _DrawPlaygroundType = typeof _DrawPlayground;
interface DrawPlaygroundType extends _DrawPlaygroundType {
  ControlDraw: typeof ControlDraw;
}

const DrawPlayground = _DrawPlayground as DrawPlaygroundType;
DrawPlayground.ControlDraw = ControlDraw;

export default DrawPlayground;
