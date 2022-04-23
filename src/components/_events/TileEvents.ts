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
  onLoading?: EventHandler<LayerEvent, T>;
  onTileUnload?: EventHandler<TileEvent, T>;
  onTileLoadStart?: EventHandler<TileEvent, T>;
  onTileError?: EventHandler<TileErrorEvent, T>;
  onTileLoad?: EventHandler<TileEvent, T>;
  onLoad?: EventHandler<LayerEvent, T>;
};
