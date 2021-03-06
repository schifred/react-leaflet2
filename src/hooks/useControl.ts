import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Control as LeafletControl } from 'leaflet';
import { useMapContext } from '../contexts/map';

const useControl = <Control extends LeafletControl>({
  createControl,
  ref,
}: {
  createControl: () => Control | undefined;
  ref: React.ForwardedRef<Control | undefined>;
}) => {
  const [control, setControl] = useState<Control>();
  const { map } = useMapContext();

  useImperativeHandle(
    ref,
    () => {
      return control;
    },
    [control],
  );

  useEffect(() => {
    const ctl = createControl();
    if (map && !control && ctl) {
      map?.addControl(ctl);
      setControl(ctl);

      return () => {
        if (map && control) {
          map?.removeControl(control);
        }
      };
    }
  }, [map, createControl]);

  return {
    map,
    control,
  };
};

export default useControl;
