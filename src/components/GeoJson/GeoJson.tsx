import React, { forwardRef, useMemo } from 'react';
import { Path } from 'leaflet';
// @ts-ignore
import Wicket from 'wicket';
import WKT from '../WKT';
import { GeoJsonProps } from './types';

const GeoJson = forwardRef<Path | undefined, GeoJsonProps>(
  // @ts-ignore
  ({ children, geojson, fit, ...props }, ref) => {
    const wkt = useMemo(() => {
      const wicket = new Wicket.Wkt();
      return wicket.read(geojson).write();
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
