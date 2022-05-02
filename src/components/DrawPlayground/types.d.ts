import { Control } from 'leaflet';
import { Methods } from './events';

export type ControlDrawProps = Control.DrawConstructorOptions & Methods;

export type DrawPlaygroundProps = ControlDrawProps & {
  /**
   * 子节点
   * @description       子节点
   * @default           undefined
   */
  children?: React.ReactNode;
};
