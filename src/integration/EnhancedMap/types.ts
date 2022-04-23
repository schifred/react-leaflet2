import { MapProps } from '../../components/Map/types';
import { TileLayerProps } from '../../components/Layer/TileLayer/types';
import { ControlLayerProp } from '../../components/Control/ControlLayers/types';
import { Record } from '../../components/Control/ControlSearch/types';

export type EnhancedMapProps = {
  controls?: string[];
  onSearch?: (text: string) => Promise<Record[]>;
  layers?: Layer[];
  tileLayers?: Omit<TileLayerProps, 'children'>[];
} & Omit<MapProps, 'layers'>;

export type Layer = Omit<ControlLayerProp, 'children'> & {
  tileLayers: Omit<TileLayerProps, 'children'>[];
};
