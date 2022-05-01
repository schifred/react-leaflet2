import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react';
import '../../index.less';
import Leaflet, { Map as LeafletMap } from 'leaflet';
import classNames from 'classnames';
import { MapProvider } from '../../contexts/map';
import { ContainerProvider } from '../../contexts/containter';
import { useQuicklyEvents } from '../../hooks/useEvents';
import useEvents from './useEvents';
import type { MapProps } from './types';

const Map = forwardRef<LeafletMap | undefined, MapProps>(
  ({ className, style, children, bounds, onMounted, ...props }, ref) => {
    const [map, setMap] = useState<LeafletMap | undefined>();
    const containerRef = useRef<HTMLDivElement>(null);
    const { options, events } = useEvents(map, props);

    useEffect(() => {
      if (map && onMounted) {
        onMounted(map);
      }
    }, [map]);

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

    useQuicklyEvents(map, events);

    useImperativeHandle(
      ref,
      () => {
        return map;
      },
      [map],
    );

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

    const containerClassName = useMemo(() => {
      return classNames({
        'react-leaflet2': true,
        [className || '']: !!className,
      });
    }, [className]);

    return (
      <div className={containerClassName} ref={containerRef} style={style}>
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
