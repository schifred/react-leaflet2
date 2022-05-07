import { forwardRef, useCallback, useEffect } from 'react';
import {
  FeatureGroup as LeafletFeatureGroup,
  Control as LeafletControl,
  LeafletEvent,
} from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import { Events as FeatureGroupEvents } from '../Group/FeatureGroup/useEvents/events';
import useControl from '../../hooks/useControl';
import useEvents, { Events } from '../../hooks/useEvents';
import { useContainerContext } from '../../contexts/containter';
import DrawLocal from './language';
import getOptions from './getOptions';
import { ControlDrawEvent, Methods } from './events';
import { ControlDrawProps } from './types';

// 规避 tree-shaking
// @ts-ignore
window.L.drawLocal = DrawLocal;

const ControlDraw = forwardRef<LeafletControl.Draw | undefined, ControlDrawProps>(
  ({ draw, edit, position = 'topleft', children, ...rest }, ref) => {
    const { container } = useContainerContext<LeafletFeatureGroup>();
    const { register } = useEvents();

    const createControl = useCallback(() => {
      if (!container) return;

      const options = getOptions({ draw, edit });
      return new LeafletControl.Draw({
        position,
        // @ts-ignore
        draw: options.draw,
        // @ts-ignore
        edit: {
          ...options.edit,
          featureGroup: container,
        },
      });
    }, [container, draw, position, edit]);

    const { map } = useControl<LeafletControl.Draw>({
      createControl,
      ref,
    });

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
        handleChange(event);
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
    }, [handleCreated, createHandler, methods]);

    return null;
  },
);

export default ControlDraw;
