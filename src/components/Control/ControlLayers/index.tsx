import _ControlLayers from './ControlLayers';
import ControlLayer from './ControlLayer';

type _ControlLayersType = typeof _ControlLayers;

interface ControlLayersType extends _ControlLayersType {
  ControlLayer: typeof ControlLayer;
}

const ControlLayers = _ControlLayers as ControlLayersType;

ControlLayers.ControlLayer = ControlLayer;

export default ControlLayers;
