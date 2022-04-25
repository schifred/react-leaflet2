// @ts-ignore
import Wicket from 'wicket';

/**
 * wkt 字符串转换成 GeoJson 数据
 * @param wkt
 * @returns
 */
export const convertWkt2GeoObject = (wkt: string) => {
  const wicket = new Wicket.Wkt();
  wicket.read(wkt);

  return wicket.toJson();
};
