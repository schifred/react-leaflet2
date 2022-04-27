import { DivIcon, Point, Control } from 'leaflet';

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
    color: '#3388ff',
    weight: 1,
    opacity: 0.5,
    fill: false,
    clickable: true,
  },
  metric: true, // Whether to use the metric measurement system or imperial
  feet: true, // When not metric, to use feet instead of yards for display.
  nautic: false, // When not metric, not feet use nautic mile for display
  showLength: true, // Whether to display distance in the tooltip
  zIndexOffset: 2000, // This should be > than the highest z-index any map layers
  factor: 1, // To change distance calculation
  maxPoints: 0, // Once this number of points are placed, finish shape
};

const polygon = {
  ...polyline,

  showArea: false,
  showLength: false,
  shapeOptions: {
    stroke: true,
    color: '#3388ff',
    weight: 1,
    opacity: 0.5,
    fill: true,
    fillColor: null, //same as color by default
    fillOpacity: 0.2,
    clickable: true,
  },
  // Whether to use the metric measurement system (truthy) or not (falsy).
  // Also defines the units to use for the metric system as an array of
  // strings (e.g. `['ha', 'm']`).
  metric: true,
  feet: true, // When not metric, to use feet instead of yards for display.
  nautic: false, // When not metric, not feet use nautic mile for display
  // Defines the precision for each type of unit (e.g. {km: 2, ft: 0}
  precision: {},
};

const circle = {};
const rectangle = {};
const marker = {};
const circlemarker = {};

const DefaultDrawOptions = {
  polyline,
  polygon,
  circle,
  rectangle,
  marker,
  circlemarker,
};

export default function getOptions(draw: Control.DrawConstructorOptions['draw']) {
  const polyline = draw?.polyline === true ? DefaultDrawOptions.polyline : draw?.polyline;
  const polygon = draw?.polygon === true ? DefaultDrawOptions.polygon : draw?.polygon;
  const circle = draw?.circle === true ? DefaultDrawOptions.circle : draw?.circle;
  const rectangle = draw?.rectangle === true ? DefaultDrawOptions.rectangle : draw?.rectangle;
  const marker = draw?.marker === true ? DefaultDrawOptions.marker : draw?.marker;
  const circlemarker =
    draw?.circlemarker === true ? DefaultDrawOptions.circlemarker : draw?.circlemarker;

  return {
    polyline,
    polygon,
    circle,
    rectangle,
    marker,
    circlemarker,
  };
}
