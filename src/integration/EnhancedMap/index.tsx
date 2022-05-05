import React, { useMemo, forwardRef, Fragment } from 'react';
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
const DefaultControlMap = {
  scale: ControlScale,
  fullscreen: ControlFullscreen,
};

const EnhancedMap = forwardRef<LeafletMap | undefined, EnhancedMapProps>(
  (
    { children, controls = DefaultControls, Controls, layers, tileLayers, onSearch, ...props },
    ref,
  ) => {
    const resetControls = controls.filter((it) => !['zoom', 'attribution'].includes(it));
    // @ts-ignore
    const ControlsComponentMap = useMemo<Record<string, React.FC>>(() => {
      return {
        ...DefaultControlMap,
        ...Controls,
      };
    }, [Controls]);

    return (
      <Map
        {...props}
        zoomControl={controls.includes('zoom')}
        attributionControl={controls.includes('attribution')}
        ref={ref}
      >
        {resetControls.map((it) => {
          let node;
          switch (it) {
            case 'layers':
              node = (
                <ControlLayers key={it}>
                  {layers?.map((layer) => {
                    const { tileLayers, ...rest } = layer;

                    if (tileLayers.length === 1) {
                      return (
                        <ControlLayers.ControlLayer key={rest.name} {...rest}>
                          <TileLayer key={tileLayers[0].url} {...tileLayers[0]} />
                        </ControlLayers.ControlLayer>
                      );
                    }

                    return (
                      <ControlLayers.ControlLayer key={rest.name} {...rest}>
                        <FeatureGroup>
                          {tileLayers.map((tileLayer) => {
                            return <TileLayer key={tileLayer.url} {...tileLayer} />;
                          })}
                        </FeatureGroup>
                      </ControlLayers.ControlLayer>
                    );
                  })}
                </ControlLayers>
              );
              break;
            case 'search':
              node = <ControlSearch key={it} onSearch={onSearch} />;
              break;
            default:
              const ControlComponent = ControlsComponentMap[it];
              node = <ControlComponent key={it} />;
              break;
          }

          return node;
        })}

        {!controls.includes('layers') && tileLayers?.length === 1 && (
          <Fragment>
            {tileLayers?.map((tileLayer) => {
              return <TileLayer key={tileLayer.url} {...tileLayer} />;
            })}
          </Fragment>
        )}

        {children}
      </Map>
    );
  },
);

export default EnhancedMap;
