import { forwardRef, useCallback, useEffect } from 'react';
import { Control as LeafletControl } from 'leaflet';
import useControl from '../../../hooks/useControl';
import { ControlAttributionProps } from './types';

const ControlAttribution = forwardRef<
  { control?: LeafletControl.Attribution },
  ControlAttributionProps
>(({ ...options }, ref) => {
  const createControl = useCallback(() => {
    return new LeafletControl.Attribution(options);
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
});

export default ControlAttribution;
