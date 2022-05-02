import { forwardRef, useCallback, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Control as LeafletControl, DomUtil } from 'leaflet';
import useControl from '../../../hooks/useControl';
import { ControlProviderProps } from './types';

const WrapControl = LeafletControl.extend({
  onAdd: () => {
    return DomUtil.create('div', 'react-leaflet2-wrap-control');
  },
});

const ControlProvider = forwardRef<LeafletControl | undefined, ControlProviderProps>(
  ({ position = 'topleft', children }, ref) => {
    const createControl = useCallback(() => {
      return new WrapControl({
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

    // @ts-ignore
    return control?._container ? createPortal(children, control?._container) : null;
  },
);

export default ControlProvider;
