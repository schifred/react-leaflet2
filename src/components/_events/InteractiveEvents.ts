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
  /**
   * 点击事件
   * @description       点击事件
   * @default           undefined
   */
  onClick?: EventHandler<LeafletMouseEvent, T>;
  /**
   * 双击事件
   * @description       双击事件
   * @default           undefined
   */
  onDblClick?: EventHandler<LeafletMouseEvent, T>;
  /**
   * 鼠标按下事件
   * @description       鼠标按下事件
   * @default           undefined
   */
  onMouseDown?: EventHandler<LeafletMouseEvent, T>;
  /**
   * 鼠标松开事件
   * @description       鼠标松开事件
   * @default           undefined
   */
  onMouseUp?: EventHandler<LeafletMouseEvent, T>;
  /**
   * 鼠标悬浮事件
   * @description       鼠标悬浮事件
   * @default           undefined
   */
  onMouseOver?: EventHandler<LeafletMouseEvent, T>;
  /**
   * 鼠标移出事件
   * @description       鼠标移出事件
   * @default           undefined
   */
  onMouseOut?: EventHandler<LeafletMouseEvent, T>;
  /**
   * 右键事件
   * @description       右键事件
   * @default           undefined
   */
  onContextMenu?: EventHandler<LeafletMouseEvent, T>;
};
