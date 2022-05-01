import React, { forwardRef } from 'react';
import { Map as LeafletMap } from 'leaflet';
import { WKT } from '../../components';
import EnhancedMap from '../EnhancedMap';
import { PolygonsProps } from './types';

const Polygons = forwardRef<LeafletMap | undefined, PolygonsProps>(
  ({ children, ploygons, getKey, ...props }, ref) => {
    return (
      <EnhancedMap {...props} ref={ref}>
        {ploygons?.map((ploygon) => {
          return <WKT key={getKey && getKey(ploygon)} {...ploygon} />;
        })}
      </EnhancedMap>
    );
  },
);

export default Polygons;
