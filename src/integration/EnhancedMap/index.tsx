import React, { forwardRef, Fragment } from 'react';
import { Map as LeafletMap } from 'leaflet';
import {
  Map,
  TileLayer,
  ControlLayers,
  ControlScale,
  ControlAttribution,
  ControlFullscreen,
  ControlSearch,
} from '../../components';
import { EnhancedMapProps } from './types';

const EnhancedMap = forwardRef<{ map?: LeafletMap }, EnhancedMapProps>(
  (
    {
      children,
      controls = ['zoom', 'scale', 'fullscreen', 'attribution', 'search', 'layers'],
      layers,
      tileLayers,
      onSearch,
      ...props
    },
    ref,
  ) => {
    return (
      <Map
        {...props}
        zoomControl={controls.includes('zoom')}
        attributionControl={controls.includes('attribution')}
        ref={ref}
      >
        {controls.includes('layers') && (
          <ControlLayers>
            {layers?.map((layer) => {
              const { tileLayers, ...rest } = layer;
              return (
                <ControlLayers.ControlLayer key={rest.name} {...rest}>
                  {tileLayers.map((tileLayer) => {
                    return <TileLayer key={tileLayer.url} {...tileLayer} />;
                  })}
                </ControlLayers.ControlLayer>
              );
            })}
          </ControlLayers>
        )}

        {!controls.includes('layers') && tileLayers?.length === 1 && (
          <Fragment>
            {tileLayers?.map((tileLayer) => {
              return <TileLayer key={tileLayer.url} {...tileLayer} />;
            })}
          </Fragment>
        )}

        {controls.includes('scale') && <ControlScale />}
        {controls.includes('fullscreen') && <ControlFullscreen />}
        {controls.includes('search') && <ControlSearch onSearch={onSearch} />}

        {children}
      </Map>
    );
  },
);

export default EnhancedMap;
