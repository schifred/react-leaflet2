import _WKT from './WKT';
import WKTGroup from './WKTGroup';

type _WKTType = typeof _WKT;
interface WKTType extends _WKTType {
  WKTGroup: typeof WKTGroup;
}

const WKT = _WKT as WKTType;
WKT.WKTGroup = WKTGroup;

export default WKT;
