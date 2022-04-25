import React, { Fragment } from 'react';
import { Map, TileLayer, latLng, ControlLayers, FeatureGroup } from 'react-leaflet-map';
import { TileLayer as LeafletTileLayer } from 'leaflet';
import 'leaflet.chinatmsproviders';
import 'leaflet/dist/leaflet.css';

const position = latLng(30.271486, 120.160136);

export default () => {
  return (
    <Fragment>
      <Map center={position} zoom={14} style={{ width: '100%', height: 400 }}>
        <ControlLayers>
          <ControlLayers.ControlLayer name="电子" checked>
            <FeatureGroup>
              <TileLayer
                createTileLayer={(options) =>
                  new LeafletTileLayer.ChinaProvider('TianDiTu.Normal.Map', options)
                }
              />
              <TileLayer
                createTileLayer={(options) =>
                  new LeafletTileLayer.ChinaProvider('TianDiTu.Normal.Annotion', options)
                }
              />
            </FeatureGroup>
          </ControlLayers.ControlLayer>
          <ControlLayers.ControlLayer name="影像">
            <FeatureGroup>
              <TileLayer
                createTileLayer={(options) =>
                  new LeafletTileLayer.ChinaProvider('TianDiTu.Satellite.Map', options)
                }
              />
              <TileLayer
                createTileLayer={(options) =>
                  new LeafletTileLayer.ChinaProvider('TianDiTu.Satellite.Annotion', options)
                }
              />
            </FeatureGroup>
          </ControlLayers.ControlLayer>
          <ControlLayers.ControlLayer name="影像2">
            <FeatureGroup>
              <TileLayer
                createTileLayer={(options) =>
                  new LeafletTileLayer.ChinaProvider('TianDiTu.Terrain.Map', options)
                }
              />
              <TileLayer
                createTileLayer={(options) =>
                  new LeafletTileLayer.ChinaProvider('TianDiTu.Terrain.Annotion', options)
                }
              />
            </FeatureGroup>
          </ControlLayers.ControlLayer>
        </ControlLayers>
      </Map>
    </Fragment>
  );
};
