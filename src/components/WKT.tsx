import React, { forwardRef, useCallback, useMemo, useEffect } from 'react';
import { GeoJSON as LeafletGeoJSON, GeoJSONOptions } from 'leaflet';
import Wicket from 'wicket';
import 'wicket/wicket-leaflet';
import GeoJSON from './GeoJSON';
import useLayer from '../hooks/useLayer';
import { convertWkt2GeoObject } from '../utils/converts';
import { PolylineLayerProps } from './Polyline';
import { PolygonLayerProps } from './Polygon';
import { RectangleLayerProps } from './Rectangle';
import { CircleLayerProps } from './Circle';

export type WKTProps = (
  | Omit<PolylineLayerProps, 'latlngs'>
  | Omit<PolygonLayerProps, 'latlngs'>
  | Omit<RectangleLayerProps, 'latlngs'>
  | Omit<CircleLayerProps, 'latlngs'>
) & {
  wkt: string;
};

/**
 * 单个图层
 */
const _WKT = forwardRef<{ layer?: LeafletGeoJSON }, WKTProps>(
  ({ children, wkt, fit, ...props }, ref) => {
    const createLayer = useCallback(() => {
      return new Wicket.Wkt(wkt).toObject(props);
    }, [wkt, props]);

    const { map, layer } = useLayer({
      createLayer,
      ref,
    });

    useEffect(() => {
      if (map && layer && fit) {
        map?.fitBounds(layer.getBounds());
      }
    }, [map, layer, fit]);

    return null;
  },
);

type WKTGroupProps = {
  children?: React.ReactNode;
  wkt: string;
  fit?: boolean;
} & GeoJSONOptions;

/**
 * 组合图层
 */
const WKTGroup = forwardRef<{ layer?: LeafletGeoJSON }, WKTGroupProps>(
  ({ children, wkt, ...props }, ref) => {
    const geojson = useMemo(() => {
      return convertWkt2GeoObject(wkt);
    }, [wkt]);

    return (
      <GeoJSON geojson={geojson} {...props} ref={ref}>
        {children}
      </GeoJSON>
    );
  },
);

type _WKTType = typeof _WKT;
interface WKTType extends _WKTType {
  WKTGroup: typeof WKTGroup;
}

const WKT = _WKT as WKTType;
WKT.WKTGroup = WKTGroup;

export default WKT;
