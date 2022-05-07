import React, { forwardRef, useCallback, useMemo, useRef } from 'react';
import { FeatureGroup, Map as LeafletMap } from 'leaflet';
// @ts-ignore
import Wicket from 'wicket';
import 'wicket/wicket-leaflet';
import { Polygon, DrawPlayground } from '../../components';
import { getWkt } from '../../utils/map';
import EnhancedMap from '../EnhancedMap';
import { PolygonDrawProps } from './types';

const draw = {
  polygon: true,
  polyline: false,
  circle: false,
  rectangle: false,
  marker: false,
  circlemarker: false,
};

const PolygonDraw = forwardRef<LeafletMap | undefined, PolygonDrawProps>(
  ({ children, wkt, onChange, ...props }, ref) => {
    const drawPlaygroundRef = useRef<FeatureGroup | undefined>(null);

    const handleChange = useCallback((event, featureGroup) => {
      // props.wkt 可能是单个多边形，这里的 wkt 可能是多个多边形，并不等价
      // 因此不能使用 useState 存储状态值
      const wkt = getWkt(featureGroup);
      if (onChange) onChange(wkt, featureGroup, event);
    }, []);

    const latlngs = useMemo(() => {
      const wicket = new Wicket.Wkt(wkt);
      const coords = wicket.components;
      if (wicket.type === 'polygon') {
        return wicket.coordsToLatLngs(coords, 1, wicket.coordsToLatLng);
      } else if (wicket.type === 'multipolygon') {
        return wicket.coordsToLatLngs(coords, 1, wicket.coordsToLatLng);
      } else {
        console.warn('only support polygon or multipolygon');
      }
    }, [wkt]);

    return (
      <EnhancedMap {...props} ref={ref}>
        {/* @ts-ignore */}
        <DrawPlayground draw={draw} onChange={handleChange} ref={drawPlaygroundRef}>
          {/* 不能使用 WKT，wkt 变更后，latlngs 变更难以定位是否变更 */}
          <Polygon latlngs={latlngs} fit />
        </DrawPlayground>

        {children}
      </EnhancedMap>
    );
  },
);

export default PolygonDraw;
