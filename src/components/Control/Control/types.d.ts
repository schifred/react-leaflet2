import React from 'react';
import { Control } from 'leaflet';

export type ControlProps = {
  /**
   * 创建控件实例
   * @description       创建控件实例
   * @default           undefined
   */
  createControl: ({
    position,
  }: {
    position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  }) => Control;
  /**
   * 位置
   * @description       位置
   * @default           undefined
   */
  position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
};
