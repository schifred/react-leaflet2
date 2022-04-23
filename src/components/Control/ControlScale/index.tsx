import { forwardRef, useCallback, useEffect } from 'react';
import { Control as LeafletControl } from 'leaflet';
import useControl from '../../../hooks/useControl';
import { ControlScaleProps } from './types';

const ControlScale = forwardRef<{ control?: LeafletControl.Scale }, ControlScaleProps>(
  ({ ...options }, ref) => {
    const createControl = useCallback(() => {
      return new LeafletControl.Scale(options);
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

export default ControlScale;
