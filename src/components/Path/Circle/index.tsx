import _Circle from './Circle';
import CircleMarker from './CircleMarker';

type _CircleType = typeof _Circle;
interface CircleType extends _CircleType {
  CircleMarker: typeof CircleMarker;
}

const Circle = _Circle as CircleType;
Circle.CircleMarker = CircleMarker;

export default Circle;
