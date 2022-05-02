import { PopupEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onPopupOpen: 'popupopen',
  onPopupClose: 'popupclose',
};

export type Methods<T> = {
  /**
   * 弹窗打开事件
   * @description       弹窗打开事件
   * @default           undefined
   */
  onPopupOpen?: EventHandler<PopupEvent, T>;
  /**
   * 弹窗关闭事件
   * @description       弹窗关闭事件
   * @default           undefined
   */
  onPopupClose?: EventHandler<PopupEvent, T>;
};
