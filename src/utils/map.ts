import { FeatureGroup, GeoJSON, Polyline, Polygon, Rectangle, Circle } from 'leaflet';

/**
 * 获取中心点
 * @param layer
 * @returns
 */
export const getCenter = (
  layer: FeatureGroup | GeoJSON | Polyline | Polygon | Rectangle | Circle,
) => {
  const bounds = layer.getBounds();
  return bounds.isValid() ? bounds.getCenter() : undefined;
};
