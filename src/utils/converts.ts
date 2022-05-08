import { GeoJSON, latLng } from 'leaflet';
// @ts-ignore
import Wicket from 'wicket';

/**
 * wkt 字符串转换成 GeoJson 数据
 * @param wkt
 * @returns
 */
export const geoJson2Wkt = (geojson: GeoJSON.GeoJsonObject) => {
  const wicket = new Wicket.Wkt();
  return wicket.fromJson(geojson).write();
};

/**
 * wkt 字符串转换成 GeoJson 数据
 * @param wkt
 * @returns
 */
export const wkt2GeoJson = (wkt: string) => {
  const wicket = new Wicket.Wkt();
  wicket.read(wkt);

  return wicket.toJson();
};

/**
 * {x,y} 格式转换成 LatLng
 */
export const coordsToLatLngs = GeoJSON.coordsToLatLngs;

/**
 * {x,y} 格式转换成 LatLng
 */
export const coordsToLatLng = (coords: { x: number; y: number }, reverse?: boolean) => {
  var lat = reverse ? coords.x : coords.y,
    lng = reverse ? coords.y : coords.x;

  return latLng(lat, lng, 1);
};
