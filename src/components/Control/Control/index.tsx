import { forwardRef, useCallback, useEffect } from 'react';
import { Control as LeafletControl } from 'leaflet';
import useControl from '../../../hooks/useControl';
import { ControlProps } from './types';

const ControlSearch = forwardRef<
  // @ts-ignore
  { control?: LeafletControl },
  ControlProps
>(({ position = 'topleft', createControl: createControlProp }, ref) => {
  const createControl = useCallback(() => {
    return createControlProp({
      position,
    });
  }, [position]);

  const { map, control } = useControl({
    createControl,
    ref,
  });

  useEffect(() => {
    if (control && position) {
      control.setPosition(position);
    }
  }, [position]);

  return null;
});

export default ControlSearch;
