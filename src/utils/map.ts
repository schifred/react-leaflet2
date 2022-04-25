import {
  FeatureGroup,
  GeoJSON,
  Polyline,
  Polygon,
  Rectangle,
  Circle,
  GeometryUtil,
  LatLngLiteral,
} from 'leaflet';
// @ts-ignore
import Wicket from 'wicket';

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

/**
 * 获取面积
 * @param layer
 * @returns
 */
export const getArea = (layer: FeatureGroup | Polygon) => {
  let result = 0;

  if (layer instanceof FeatureGroup) {
    layer.eachLayer((_ly) => {
      const ly = _ly as Polygon;
      const latlngs = ly.getLatLngs() as LatLngLiteral[] | LatLngLiteral[][];
      const area = GeometryUtil.geodesicArea(
        Array.isArray(latlngs[0]) ? (latlngs[0] as LatLngLiteral[]) : (latlngs as LatLngLiteral[]),
      );
      result += area;
    });
  } else {
    const latlngs = layer.getLatLngs() as LatLngLiteral[] | LatLngLiteral[][];
    const area = GeometryUtil.geodesicArea(
      Array.isArray(latlngs[0]) ? (latlngs[0] as LatLngLiteral[]) : (latlngs as LatLngLiteral[]),
    );
    result += area;
  }

  return result;
};

/**
 * 获取 wkt 格式数据
 * @param layer
 * @returns
 */
export const getWkt = (layer: FeatureGroup | Polygon) => {
  const wicket = new Wicket.Wkt();
  wicket.fromObject(layer);

  return wicket.write();
};

/**
 * 射线法判断点是否在多边形内 https://www.cnblogs.com/muyefeiwu/p/11260366.html
 * @param latlngs
 * @param latlng
 * @returns
 */
export const checkLatlngsContain = (latlngs: LatLngLiteral[][], latlng: LatLngLiteral) => {
  return latlngs.some((latlngList) => {
    let crossed = false;
    latlngList.forEach((curr, index) => {
      let next;
      if (index === latlngList.length - 1) {
        next = latlngList[0];
      } else {
        next = latlngList[index + 1];
      }

      // latlng 垂直方向在前后两个坐标点之间
      if (curr.lat >= latlng.lat !== next.lat >= latlng.lat) {
        // 计算余切
        const ctan = (next.lng - curr.lng) / (next.lat - curr.lat);
        // 两个坐标点连线上垂直坐标等同 latlng 的水平坐标
        const lng = ctan * (latlng.lat - curr.lat) + curr.lng;
        // 自 latlng 起绘制水平线，是否两个坐标点连线交叉
        if (latlng.lng <= lng) {
          // 奇数个在区域范围内
          crossed = !crossed;
        }
      }
    });

    return crossed;
  });
};

/**
 * 判断点是否在 FeatureGroup 中
 * @param layer
 * @param latlng
 */
export const checkFeatureGroupContain = (layer: FeatureGroup, latlng: LatLngLiteral) => {
  return layer.getLayers().some((_layer) => {
    const latlngs = (_layer as Polygon).getLatLngs() as LatLngLiteral[][];
    return checkLatlngsContain(latlngs, latlng);
  });
};

/**
 * 过滤出在 FeatureGroup 中的点
 * @param layer
 * @param latlng
 */
export const filterLatlngs = (latlngs: LatLngLiteral[], layer: FeatureGroup) => {
  return latlngs.filter((latlng) => checkFeatureGroupContain(layer, latlng));
};
