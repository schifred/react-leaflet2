import { DivIcon, Point, Control } from 'leaflet';

window.L.Edit.SimpleShape = window.L.Edit.SimpleShape.mergeOptions({
  moveIcon: new window.L.DivIcon({
    iconSize: new window.L.Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-move',
  }),
  resizeIcon: new window.L.DivIcon({
    iconSize: new window.L.Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-resize',
  }),
  touchMoveIcon: new window.L.DivIcon({
    iconSize: new window.L.Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon',
  }),
  touchResizeIcon: new window.L.DivIcon({
    iconSize: new window.L.Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon',
  }),
});

window.L.Edit.PolyVerticesEdit = window.L.Edit.PolyVerticesEdit.mergeOptions({
  icon: new window.L.DivIcon({
    iconSize: new window.L.Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon',
  }),
  touchIcon: new window.L.DivIcon({
    iconSize: new window.L.Point(8, 8),
    className: 'leaflet-div-icon leaflet-editing-icon leaflet-touch-icon',
  }),
  drawError: {
    color: '#b00b00',
    timeout: 1000,
  },
});

export default function getOptions(edit: Control.DrawConstructorOptions['edit']) {
  const { selectedPathOptions, ...rest } = edit?.edit || {};
  return {
    edit: {
      selectedPathOptions: {
        stroke: true,
        color: '#1890ff',
        weight: 2,
        opacity: 1,
        fill: true,
        fillColor: null,
        fillOpacity: 0.3,
        clickable: true,
        ...selectedPathOptions,
      },
      ...rest,
    },
  };
}
