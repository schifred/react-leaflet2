import { FeatureGroup as LeafletFeatureGroup, LeafletEvent, LayerEvent } from 'leaflet';
import { InteractiveEvents, LayerEvents, PopupEvents, TooltipEvents } from '../../../_events';
import type { EventHandler } from '../../../../types';

export const Events = {
  onLayerAdd: 'layeradd',
  onLayerRemove: 'layerremove',
  ...InteractiveEvents.Events,
  ...LayerEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
};

export type Methods = {
  onLayerAdd?: EventHandler<LayerEvent, LeafletFeatureGroup>;
  onLayerRemove?: EventHandler<LayerEvent, LeafletFeatureGroup>;
} & InteractiveEvents.Methods<LeafletFeatureGroup> &
  LayerEvents.Methods<LeafletFeatureGroup> &
  PopupEvents.Methods<LeafletFeatureGroup> &
  TooltipEvents.Methods<LeafletFeatureGroup>;
