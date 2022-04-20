import React, { useState, useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import Leaflet, { Map as LeafletMap, MapOptions, LatLngBoundsExpression } from 'leaflet';
import { MapProvider } from '../contexts/map';
import { ContainerProvider } from '../contexts/containter';

type MapProps = {
  style?: React.CSSProperties;
  children?: React.ReactNode;
  bounds?: LatLngBoundsExpression;
} & MapOptions;

const Map = forwardRef<{ map?: LeafletMap }, MapProps>(
  ({ style, children, bounds, ...options }, ref) => {
    const [map, setMap] = useState<LeafletMap | undefined>();
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(
      ref,
      () => {
        return {
          map,
        };
      },
      [map],
    );

    useEffect(() => {
      if (containerRef.current && !map) {
        const map = Leaflet.map(containerRef.current, options);
        setMap(map);
      }
    }, [containerRef]);

    useEffect(() => {
      return () => {
        if (map) {
          map.remove();
        }
      };
    }, []);

    const { zoom, center } = options;

    useEffect(() => {
      if (map) {
        if (center) map.setView(center, zoom);
        else if (zoom) map.setZoom(zoom);
      }
    }, [zoom, center]);

    useEffect(() => {
      if (map && bounds) {
        map.fitBounds(bounds);
      }
    }, [bounds]);

    return (
      <div className="chaos-react-leaflet" ref={containerRef} style={style}>
        {map ? (
          <MapProvider value={{ map }}>
            <ContainerProvider value={{ container: map }}>{children}</ContainerProvider>
          </MapProvider>
        ) : null}
      </div>
    );
  },
);

export default Map;
