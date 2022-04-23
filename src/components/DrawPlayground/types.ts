import { Control as LeafletControl } from 'leaflet';
import { Methods } from './events';

export type ControlDrawProps = LeafletControl.DrawConstructorOptions & Methods;
