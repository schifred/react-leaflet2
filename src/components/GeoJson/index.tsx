import _GeoJson from './GeoJson';
import GeoJsonGroup from './GeoJsonGroup';

type _GeoJsonType = typeof _GeoJson;
interface GeoJsonType extends _GeoJsonType {
  GeoJsonGroup: typeof GeoJsonGroup;
}

const GeoJson = _GeoJson as GeoJsonType;
GeoJson.GeoJsonGroup = GeoJsonGroup;

export default GeoJson;
