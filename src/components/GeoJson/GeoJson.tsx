import React, { forwardRef, useMemo } from 'react';
import { Path } from 'leaflet';
// @ts-ignore
import Wicket from 'wicket';
import WKT from '../WKT/WKT';
import { GeoJsonProps } from './types';

const GeoJsonGroup = forwardRef<{ layer?: Path }, GeoJsonProps>(
  ({ children, geojson, fit, ...props }, ref) => {
    const wkt = useMemo(() => {
      const wicket = new Wicket.Wkt();
      return wicket.read(geojson).write();
    }, []);

    return (
      // @ts-ignore
      <WKT {...props} wkt={wkt}>
        {children}
      </WKT>
    );
  },
);

export default GeoJsonGroup;
