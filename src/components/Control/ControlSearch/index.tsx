import { forwardRef, useCallback, useEffect } from 'react';
import { Control as LeafletControl } from 'leaflet';
import 'leaflet-search';
import 'leaflet-search/dist/leaflet-search.src.css';
import useControl from '../../../hooks/useControl';
import { ControlSearchProps, Record } from './types';

const ControlSearch = forwardRef<
  // @ts-ignore
  { control?: LeafletControl.Fullscreen },
  ControlSearchProps
>(({ position = 'topleft', onSearch }, ref) => {
  const createControl = useCallback(() => {
    // @ts-ignore
    return new LeafletControl.Search({
      position,
      sourceData: (text: string, cb: (records: Record[]) => void) => {
        if (onSearch) {
          onSearch(text).then((records) => {
            if (records) cb(records);
          });
        }
      },
      filterData: (text: string, records: Record[]) => records,
      textPlaceholder: '搜索',
      textErr: '没有找到匹配数据',
      text: 'Color...',
      markerLocation: true,
    });
  }, [position]);

  const { map, control } = useControl({
    createControl,
    ref,
  });

  useEffect(() => {
    if (control && position) {
      control.setPosition(position);
    }
  }, [position]);

  return null;
});

export default ControlSearch;
