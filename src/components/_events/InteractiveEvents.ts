import { LeafletMouseEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onClick: 'click',
  onDblClick: 'dblclick',
  onMouseDown: 'mousedown',
  onMouseUp: 'mouseup',
  onMouseOver: 'mouseover',
  onMouseOut: 'mouseout',
  onContextMenu: 'contextmenu',
};

export type Methods<T> = {
  onClick?: EventHandler<LeafletMouseEvent, T>;
  onDblClick?: EventHandler<LeafletMouseEvent, T>;
  onMouseDown?: EventHandler<LeafletMouseEvent, T>;
  onMouseUp?: EventHandler<LeafletMouseEvent, T>;
  onMouseOver?: EventHandler<LeafletMouseEvent, T>;
  onMouseOut?: EventHandler<LeafletMouseEvent, T>;
  onContextMenu?: EventHandler<LeafletMouseEvent, T>;
};
