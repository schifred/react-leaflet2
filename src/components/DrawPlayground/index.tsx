import React, { forwardRef, useCallback, useEffect } from 'react';
import Leaflet, {
  FeatureGroup as LeafletFeatureGroup,
  Control as LeafletControl,
  LeafletEvent,
} from 'leaflet';
import 'leaflet-draw';
// import 'leaflet-draw/dist/leaflet.draw-src.js';
import 'leaflet-draw/dist/leaflet.draw.css';
import FeatureGroup, { FeatureGroupEvent } from '../FeatureGroup';
import useControl from '../../hooks/useControl';
import useEvents, { Events } from '../../hooks/useEvents';
import { useContainerContext } from '../../contexts/containter';
import './language';

export const ControlDrawEvent = {
  onCreated: Leaflet.Draw.Event.CREATED,
  onEdited: Leaflet.Draw.Event.EDITED,
  onDrawStart: Leaflet.Draw.Event.DRAWSTART,
  onDrawStop: Leaflet.Draw.Event.DRAWSTOP,
  onDrawVertex: Leaflet.Draw.Event.DRAWVERTEX,
  onEditStart: Leaflet.Draw.Event.EDITSTART,
  onEditMove: Leaflet.Draw.Event.EDITMOVE,
  onEditResize: Leaflet.Draw.Event.EDITRESIZE,
  onEditVertex: Leaflet.Draw.Event.EDITVERTEX,
  onEditStop: Leaflet.Draw.Event.EDITSTOP,
  onDeleted: Leaflet.Draw.Event.DELETED,
  onDeleteStart: Leaflet.Draw.Event.DELETESTART,
  onDeleteStop: Leaflet.Draw.Event.DELETESTOP,
  onMarkerContext: Leaflet.Draw.Event.MARKERCONTEXT,
  onToolbarClosed: Leaflet.Draw.Event.TOOLBARCLOSED,
  onToolbarOpened: Leaflet.Draw.Event.TOOLBAROPENED,
};

type Method = (event: LeafletEvent, featureGroup: LeafletFeatureGroup) => void;
type Methods = {
  onChange?: Method;
  onCreated?: Method;
  onEdited?: Method;
  onDrawStart?: Method;
  onDrawStop?: Method;
  onDrawVertex?: Method;
  onEditStart?: Method;
  onEditMove?: Method;
  onEditResize?: Method;
  onEditVertex?: Method;
  onEditStop?: Method;
  onDeleted?: Method;
  onDeleteStart?: Method;
  onDeleteStop?: Method;
  onMarkerContext?: Method;
  onToolbarClosed?: Method;
  onToolbarOpened?: Method;
};

type ControlDrawProps = LeafletControl.DrawConstructorOptions & Methods;

const ControlDraw = forwardRef<{ control?: LeafletControl.Draw }, ControlDrawProps>(
  ({ draw = {}, edit, position = 'topleft', children, ...methods }, ref) => {
    const { container } = useContainerContext<LeafletFeatureGroup>();
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
      ref,
    });

    const createHandler = useCallback(
      (methodName: keyof Methods) => {
        return (event: LeafletEvent) => {
          if (methods[methodName]) methods[methodName]?.(event, container);
        };
      },
      [container],
    );

    const { onCreated } = methods;
    const handleCreated = useCallback(
      (event: LeafletEvent) => {
        const { layer } = event;
        if (container) container.addLayer(layer);
        if (onCreated) onCreated(event, container);
      },
      [container],
    );

    useEffect(() => {
      const unregister = register(container, {
        [FeatureGroupEvent.onLayerAdd]: createHandler('onChange'),
        [FeatureGroupEvent.onLayerRemove]: createHandler('onChange'),
      });

      return () => {
        unregister(container);
      };
    }, [container, createHandler]);

    useEffect(() => {
      const events: Events = {};
      Object.keys(methods || {}).forEach((eventName) => {
        events[ControlDrawEvent[eventName]] = createHandler(eventName);
      });

      const unregister = register(map, {
        [ControlDrawEvent.onCreated]: handleCreated,
        ...events,
      });

      return () => {
        unregister(map);
      };
    }, [handleCreated, createHandler]);

    return null;
  },
);

type DrawPlaygroundProps = ControlDrawProps & {
  children?: React.ReactNode;
};

const _DrawPlayground = forwardRef<{ control?: LeafletControl.Draw }, DrawPlaygroundProps>(
  ({ children, ...props }, ref) => {
    return (
      <FeatureGroup>
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
