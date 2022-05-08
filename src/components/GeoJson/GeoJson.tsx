import React, { forwardRef, useMemo } from 'react';
import { Path } from 'leaflet';
import { geoJson2Wkt } from '../../utils/converts';
import WKT from '../WKT';
import { GeoJsonProps } from './types';

const GeoJson = forwardRef<Path | undefined, GeoJsonProps>(
  ({ children, geojson, ...props }, ref) => {
    const wkt = useMemo(() => {
      return geojson ? geoJson2Wkt(geojson) : undefined;
    }, [geojson]);

    return (
      // @ts-ignore
      <WKT {...props} wkt={wkt} ref={ref}>
        {children}
      </WKT>
    );
  },
);

export default GeoJson;
