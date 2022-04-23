import { PopupEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onPopupOpen: 'popupopen',
  onPopupClose: 'popupclose',
};

export type Methods<T> = {
  onPopupOpen?: EventHandler<PopupEvent, T>;
  onPopupClose?: EventHandler<PopupEvent, T>;
};
