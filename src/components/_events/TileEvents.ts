import { LayerEvent, TileEvent, TileErrorEvent } from 'leaflet';
import type { EventHandler } from '../../types';

export const Events = {
  onLoading: 'loading',
  onTileUnload: 'tileunload',
  onTileLoadStart: 'tileloadstart',
  onTileError: 'tileerror',
  onTileLoad: 'tileload',
  onLoad: 'load',
};

export type Methods<T> = {
  /**
   * 瓦片加载中事件
   * @description       瓦片加载中事件
   * @default           undefined
   */
  onLoading?: EventHandler<LayerEvent, T>;
  /**
   * 单张瓦片移除事件
   * @description       单张瓦片移除事件
   * @default           undefined
   */
  onTileUnload?: EventHandler<TileEvent, T>;
  /**
   * 单张瓦片加载开始事件
   * @description       单张瓦片加载开始事件
   * @default           undefined
   */
  onTileLoadStart?: EventHandler<TileEvent, T>;
  /**
   * 单张瓦片加载失败事件
   * @description       单张瓦片加载失败事件
   * @default           undefined
   */
  onTileError?: EventHandler<TileErrorEvent, T>;
  /**
   * 单张瓦片加载完成事件
   * @description       单张瓦片加载完成事件
   * @default           undefined
   */
  onTileLoad?: EventHandler<TileEvent, T>;
  /**
   * 所有瓦片加载完成事件
   * @description       所有瓦片加载完成事件
   * @default           undefined
   */
  onLoad?: EventHandler<LayerEvent, T>;
};
