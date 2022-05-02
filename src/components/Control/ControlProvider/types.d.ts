import React from 'react';

export type ControlProviderProps = {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children: React.ReactNode;
  /**
   * 位置
   * @description       位置
   * @default           undefined
   */
  position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
};
