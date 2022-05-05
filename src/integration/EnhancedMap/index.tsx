import React, { forwardRef, Fragment } from 'react';
import { Map as LeafletMap } from 'leaflet';
import {
  Map,
  TileLayer,
  FeatureGroup,
  ControlLayers,
  ControlScale,
  ControlFullscreen,
  ControlSearch,
} from '../../components';
import { EnhancedMapProps } from './types';

const DefaultControls = ['zoom', 'scale', 'fullscreen', 'attribution', 'search', 'layers'];

const EnhancedMap = forwardRef<LeafletMap | undefined, EnhancedMapProps>(
  ({ children, controls = DefaultControls, layers, tileLayers, onSearch, ...props }, ref) => {
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
                  {tileLayers.length === 1 ? (
                    <TileLayer key={tileLayers[0].url} {...tileLayers[0]} />
                  ) : (
                    <FeatureGroup>
                      {tileLayers.map((tileLayer) => {
                        return <TileLayer key={tileLayer.url} {...tileLayer} />;
                      })}
                    </FeatureGroup>
                  )}
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
