import React, { forwardRef, useCallback, useEffect, useState, useRef } from 'react';
import { FeatureGroup, Map as LeafletMap } from 'leaflet';
import { WKT, DrawPlayground, Marker } from '../../components';
import { getCenter, getArea, getWkt, checkFeatureGroupContain } from '../../utils/map';
import EnhancedMap from '../EnhancedMap';
import { DrawProps, Points, Value } from './types';

const Draw = forwardRef<LeafletMap | undefined, DrawProps>(
  (
    {
      children,
      ploygons,
      points: pointsProp,
      selectedIcon,
      unselectedIcon,
      wkt,
      getPloygonKey,
      getPointKey,
      draw,
      onChange,
      ...props
    },
    ref,
  ) => {
    const [value, setValue] = useState<Value>({});
    const [points, setPoints] = useState<Points>([]);
    const drawPlaygroundRef = useRef<FeatureGroup | undefined>(null);

    useEffect(() => {
      if (drawPlaygroundRef.current && pointsProp) {
        const pts = pointsProp.filter((point) =>
          checkFeatureGroupContain(drawPlaygroundRef.current!, point?.latlng),
        );
        setPoints(pts);
        setValue((value) => ({
          ...value,
          points: pts,
        }));
      }
    }, [drawPlaygroundRef, pointsProp]);

    const handleChange = useCallback(
      (e, featureGroup) => {
        setValue((value) => ({
          ...value,
          center: getCenter(featureGroup),
          area: getArea(featureGroup),
          wkt: getWkt(featureGroup),
          featureGroup,
        }));
      },
      [onChange],
    );

    useEffect(() => {
      if (onChange) onChange(value);
    }, [value, onChange]);

    const handlePointClick = useCallback(
      (point) => {
        point.selected = !point.selected;
        setPoints([...points]);

        setValue((value) => ({
          ...value,
          points: [...points],
        }));
      },
      [points],
    );

    return (
      <EnhancedMap {...props} ref={ref}>
        {ploygons?.map((ploygon) => {
          return <WKT key={getPloygonKey && getPloygonKey(ploygon)} {...ploygon} />;
        })}

        {points?.map((point) => {
          const { selected, ...rest } = point;
          return (
            <Marker
              // @ts-ignore
              key={getPointKey && getPointKey(rest)}
              {...rest}
              icon={selected ? selectedIcon : unselectedIcon}
              onClick={handlePointClick}
            />
          );
        })}

        {children}

        <DrawPlayground draw={draw} onChange={handleChange} ref={drawPlaygroundRef}>
          {wkt && <WKT wkt={wkt} fit></WKT>}
        </DrawPlayground>
      </EnhancedMap>
    );
  },
);

export default Draw;
