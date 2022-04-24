import React, { forwardRef, useCallback } from 'react';
import { FeatureGroup as LeafletFeatureGroup, LeafletEvent } from 'leaflet';

export const Events = {
  onLayerAdd: 'layeradd',
  onLayerRemove: 'layerremove',
};

type Method = (event: LeafletEvent, featureGroup: LeafletFeatureGroup) => void;
type Methods = {
  onLayerAdd?: Method;
  onLayerRemove?: Method;
};
