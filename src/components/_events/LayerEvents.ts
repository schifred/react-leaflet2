import { LayerEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onAdd: 'add',
  onRemove: 'remove',
};

export type Methods<T> = {
  onAdd?: EventHandler<LayerEvent, T>;
  onRemove?: EventHandler<LayerEvent, T>;
};
