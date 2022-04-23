import { forwardRef, useCallback, useEffect } from 'react';
import { Control as LeafletControl } from 'leaflet';
import 'leaflet-fullscreen';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import useControl from '../../../hooks/useControl';
import { ControlFullscreenProps } from './types';

const ControlFullscreen = forwardRef<
  // @ts-ignore
  { control?: LeafletControl.Fullscreen },
  ControlFullscreenProps
>(({ position = 'topleft' }, ref) => {
  const createControl = useCallback(() => {
    // @ts-ignore
    return new LeafletControl.Fullscreen({
      position,
      title: {
        false: '全屏展示',
        true: '退出全屏',
      },
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

export default ControlFullscreen;
