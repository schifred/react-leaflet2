export type Option = { latlng: LatLng; label: React.ReactNode; tip?: string };

export type ControlSearchProps = {
  /**
   * 搜索事件
   * @description       搜索事件
   * @default           undefined
   */
  onSearch?: (text: string) => Promise<Option[]>;
  /**
   * 位置
   * @description       位置
   * @default           undefined
   */
  position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
};
