import React, { forwardRef, useMemo } from 'react';
// @ts-ignore
import Wicket from 'wicket';
import 'wicket/wicket-leaflet';
import FeatureGroup from '../Group/FeatureGroup';
import Marker from '../Marker/Marker';
import { coordsToLatLng, coordsToLatLngs } from '../../utils/converts';
import { Polyline, Polygon } from '../Path';
import { WKTProps } from './types';

/**
 * 单个图层
 */
const WKT = forwardRef<any | undefined, WKTProps>(({ children, wkt, ...props }, ref) => {
  if (!wkt) return null;

  const wicket = useMemo(() => {
    return new Wicket.Wkt(wkt);
  }, [wkt]);

  let coords = wicket.components;
  let latlng;
  let latlngs;
  let node = null;
  switch (wicket.type) {
    case 'point':
      latlng = coordsToLatLng(Array.isArray(coords) ? coords[0] : coords);
      node = (
        // @ts-ignore
        <Marker {...props} latlng={latlng} ref={ref}>
          {children}
        </Marker>
      );
      break;
    case 'multipoint':
      node = (
        <FeatureGroup ref={ref}>
          {coords.map((it: { x: number; y: number } | { x: number; y: number }[]) => {
            const latlng = coordsToLatLng(Array.isArray(it) ? it[0] : it);
            return (
              // @ts-ignore
              <Marker key={latlng.toString()} {...props} latlng={latlng}>
                {children}
              </Marker>
            );
          })}
        </FeatureGroup>
      );
      break;
    case 'linestring':
      latlngs = coordsToLatLngs(coords, 0, wicket.coordsToLatLng);
      node = (
        // @ts-ignore
        <Polyline {...props} latlngs={latlngs} ref={ref}>
          {children}
        </Polyline>
      );
      break;
    case 'multilinestring':
      latlngs = coordsToLatLngs(coords, 1, wicket.coordsToLatLng);
      node = (
        // @ts-ignore
        <Polyline {...props} latlngs={latlngs} ref={ref}>
          {children}
        </Polyline>
      );
      break;
    case 'polygon':
      latlngs = coordsToLatLngs(coords, 1, wicket.coordsToLatLng);
      node = (
        // @ts-ignore
        <Polygon {...props} latlngs={latlngs} ref={ref}>
          {children}
        </Polygon>
      );
      break;
    case 'multipolygon':
      latlngs = coordsToLatLngs(coords, 2, wicket.coordsToLatLng);
      node = (
        // @ts-ignore
        <Polygon {...props} latlngs={latlngs} ref={ref}>
          {children}
        </Polygon>
      );
      break;
    default:
      console.log(
        'support point, multipoint, linestring, multilinestring, polygon, multipolygon type',
      );
      break;
  }

  return node;
});

export default WKT;
