import React, { forwardRef, useMemo } from 'react';
import { GeoJSON as LeafletGeoJSON } from 'leaflet';
import 'wicket/wicket-leaflet';
import GeoJSON from '../GeoJSON';
import { convertWkt2GeoObject } from '../../utils/converts';
import { WKTGroupProps } from './types';

/**
 * 组合图层
 */
const WKTGroup = forwardRef<LeafletGeoJSON | undefined, WKTGroupProps>(
  ({ children, wkt, ...props }, ref) => {
    const geojson = useMemo(() => {
      return convertWkt2GeoObject(wkt);
    }, [wkt]);

    return (
      // @ts-ignore
      <GeoJSON geojson={geojson} {...props} ref={ref}>
        {children}
      </GeoJSON>
    );
  },
);

export default WKTGroup;
