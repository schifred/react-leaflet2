export type Option = { latlng: LatLng; label: React.ReactNode; tip?: string };

export type ControlSearchProps = {
  onSearch?: (text: string) => Promise<Option[]>;
  position?: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
};
