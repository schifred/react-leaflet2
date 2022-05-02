import React, { forwardRef } from 'react';
import { Control as LeafletControl } from 'leaflet';
import 'leaflet-fullscreen';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';
import Control from '../Control';
import { ControlProps } from '../Control/types';

const ControlFullscreen = forwardRef<
  // @ts-ignore
  LeafletControl.Fullscreen | undefined,
  Omit<ControlProps, 'createControl'>
>((props, ref) => {
  return (
    <Control
      {...props}
      createControl={() =>
        // @ts-ignore
        new LeafletControl.Fullscreen({
          title: {
            false: '全屏展示',
            true: '退出全屏',
          },
          ...props,
        })
      }
      ref={ref}
    />
  );
});

export default ControlFullscreen;
