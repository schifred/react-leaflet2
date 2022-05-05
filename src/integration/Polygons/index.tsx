import React, { forwardRef } from 'react';
import { Map as LeafletMap } from 'leaflet';
import { WKT } from '../../components';
import EnhancedMap from '../EnhancedMap';
import { PolygonsProps } from './types';

const Polygons = forwardRef<LeafletMap | undefined, PolygonsProps>(
  ({ children, ploygons, ...props }, ref) => {
    return (
      <EnhancedMap {...props} ref={ref}>
        {ploygons?.map((ploygon) => {
          return <WKT key={ploygon.wkt} {...ploygon} />;
        })}
      </EnhancedMap>
    );
  },
);

export default Polygons;
