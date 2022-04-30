import React, { useCallback, useState, useMemo, useRef, useEffect } from 'react';
import { LeafletMouseEvent } from 'leaflet';
import classnames from 'classnames';
import { useMapContext } from '../../../contexts/map';
import ControlProvider from '../ControlProvider';
import './index.less';
import { ControlSearchProps, Option } from './types';

const ControlSearch = ({ onSearch, position }: ControlSearchProps) => {
  const { map } = useMapContext();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [actived, setActived] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);

  const handleActive = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      event.stopPropagation();
      setActived(!actived);
      if (actived) {
        inputRef.current?.blur();
        setOptions([]);
      } else {
        inputRef.current?.focus();
      }
    },
    [actived],
  );

  useEffect(() => {
    const close = (event: LeafletMouseEvent) => {
      // @ts-ignore
      if (event.originalEvent.target && containerRef.current?.contains(event.originalEvent.target))
        return;

      setActived(false);
      inputRef.current?.blur();
      setOptions([]);
    };

    map.on('click', close);

    return () => {
      map.off('click', close);
    };
  }, [map]);

  const handleSearch = useCallback(
    (text: string) => {
      if (onSearch) {
        onSearch(text).then((res) => {
          if (res) setOptions(res);
        });
      }
    },
    [onSearch],
  );

  const handleInputKeyup = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        handleSearch(e.target.value);
      }
    },
    [handleSearch],
  );

  const handleOptionClick = useCallback(
    (event, option: Option) => {
      event.preventDefault();
      event.stopPropagation();
      map.setView(option.latlng);
    },
    [onSearch],
  );

  const className = useMemo(
    () =>
      classnames({
        'react-leaflet2-control-search': true,
        'leaflet-bar': true,
        actived,
      }),
    [actived],
  );

  return (
    <ControlProvider position={position}>
      <div
        className={className}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
        }}
        ref={containerRef}
      >
        <span className="react-leaflet2-control-search-icon" onClick={handleActive}>
          <svg
            viewBox="64 64 896 896"
            focusable="false"
            data-icon="search"
            width="1.75em"
            height="1.75em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z"></path>
          </svg>
        </span>
        <div className="react-leaflet2-control-search-wrap">
          <input
            type="text"
            placeholder="请输入内容搜索"
            onKeyUp={handleInputKeyup}
            ref={inputRef}
          />
        </div>
        {options.length ? (
          <div className="react-leaflet2-control-search-results">
            {options.map((option) => {
              return (
                <span
                  key={option.latlng.toString()}
                  title={typeof option.label === 'string' ? option.label : option.tip}
                  onClick={(e) => handleOptionClick(e, option)}
                >
                  {option.label}
                </span>
              );
            })}
          </div>
        ) : null}
      </div>
    </ControlProvider>
  );
};

export default ControlSearch;
