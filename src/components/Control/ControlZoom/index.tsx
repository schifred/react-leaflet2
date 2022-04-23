import { forwardRef, useCallback, useEffect } from 'react';
import { Control as LeafletControl } from 'leaflet';
import useControl from '../../../hooks/useControl';
import { ControlZoomProps } from './types';

const ControlZoom = forwardRef<{ control?: LeafletControl.Zoom }, ControlZoomProps>(
  ({ ...options }, ref) => {
    const createControl = useCallback(() => {
      return new LeafletControl.Zoom(options);
    }, [options]);

    const { map, control } = useControl({
      createControl,
      ref,
    });

    const { position } = options;
    useEffect(() => {
      if (control && position) {
        control.setPosition(position);
      }
    }, [position]);

    return null;
  },
);

export default ControlZoom;
