import _DrawPlayground from './DrawPlayground';
import ControlDraw from './ControlDraw';

type _DrawPlaygroundType = typeof _DrawPlayground;
interface DrawPlaygroundType extends _DrawPlaygroundType {
  ControlDraw: typeof ControlDraw;
}

const DrawPlayground = _DrawPlayground as DrawPlaygroundType;
DrawPlayground.ControlDraw = ControlDraw;

export default DrawPlayground;
