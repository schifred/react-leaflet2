import React, { forwardRef, useCallback, useState } from 'react';
import { Map as LeafletMap, LatLng } from 'leaflet';
import { Marker } from '../../components';
import EnhancedMap from '../EnhancedMap';
import { PositionProps } from './types';

const icon = new Marker.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.8.0/dist/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Position = forwardRef<{ map?: LeafletMap }, PositionProps>(
  ({ children, icon: iconProp, onChange, ...props }, ref) => {
    const [latlng, setLatlng] = useState<LatLng>();

    const handleClick = useCallback(
      (e) => {
        setLatlng(e.latlng);
        if (onChange) onChange(e.latlng);
      },
      [onChange],
    );

    return (
      <EnhancedMap {...props} onClick={handleClick} ref={ref}>
        {latlng && (
          <Marker latlng={latlng} icon={iconProp || icon}>
            {children}
          </Marker>
        )}
      </EnhancedMap>
    );
  },
);

export default Position;
