import { DivIcon, Point, Control } from 'leaflet';
import { DefaultIcon } from '../../_common/icon';

const polyline = {
  allowIntersection: true,
  repeatMode: false,
  drawError: {
    color: '#b00b00',
    timeout: 2500,
  },
  icon: new DivIcon({
    iconSize: new Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon',
  }),
  touchIcon: new DivIcon({
    iconSize: new Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon leaflet-touch-icon',
  }),
  guidelineDistance: 20,
  maxGuideLineLength: 4000,
  shapeOptions: {
    stroke: true,
    color: '#1890ff',
    weight: 2,
    opacity: 1,
    fill: false,
    clickable: true,
  },
  metric: true,
  feet: false,
  nautic: false,
  precision: {},
  showLength: true,
  zIndexOffset: 2000,
  factor: 1, // To change distance calculation
  maxPoints: 0,
};

const polygon = {
  ...polyline,
  showArea: true,
  showLength: false,
  shapeOptions: {
    stroke: true,
    color: '#1890ff',
    weight: 2,
    opacity: 1,
    fill: true,
    fillColor: null,
    fillOpacity: 0.3,
    clickable: true,
  },
};

const rectangle = {
  showArea: true,
  metric: true,
  shapeOptions: {
    stroke: true,
    color: '#1890ff',
    weight: 2,
    opacity: 1,
    fill: true,
    fillColor: null,
    fillOpacity: 0.3,
    clickable: true,
  },
};

const circle = {
  shapeOptions: {
    stroke: true,
    color: '#1890ff',
    weight: 2,
    opacity: 1,
    fill: true,
    fillColor: null,
    fillOpacity: 0.3,
    clickable: true,
  },
};

const marker = {
  icon: DefaultIcon,
};

const circlemarker = {
  stroke: true,
  color: '#1890ff',
  weight: 2,
  opacity: 1,
  fill: true,
  fillColor: null,
  fillOpacity: 0.3,
  clickable: true,
};

const DefaultDrawOptions = {
  polyline,
  polygon,
  rectangle,
  circle,
  marker,
  circlemarker,
};

export default function getOptions(draw: Control.DrawConstructorOptions['draw']) {
  const polyline = draw?.polyline === true ? DefaultDrawOptions.polyline : draw?.polyline;
  const polygon = draw?.polygon === true ? DefaultDrawOptions.polygon : draw?.polygon;
  const rectangle = draw?.rectangle === true ? DefaultDrawOptions.rectangle : draw?.rectangle;
  const circle = draw?.circle === true ? DefaultDrawOptions.circle : draw?.circle;
  const marker = draw?.marker === true ? DefaultDrawOptions.marker : draw?.marker;
  const circlemarker =
    draw?.circlemarker === true ? DefaultDrawOptions.circlemarker : draw?.circlemarker;

  return {
    polyline,
    polygon,
    rectangle,
    circle,
    marker,
    circlemarker,
  };
}
