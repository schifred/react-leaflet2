import { DivIcon, Point, Control } from 'leaflet';

export default function getOptions(edit: Control.DrawConstructorOptions['edit']) {
  return {
    edit: {
      icon: new DivIcon({
        iconSize: new Point(8, 8),
        className: 'leaflet-div-icon leaflet-editing-icon',
      }),
      touchIcon: new DivIcon({
        iconSize: new Point(8, 8),
        className: 'leaflet-div-icon leaflet-editing-icon leaflet-touch-icon',
      }),
      drawError: {
        color: '#b00b00',
        timeout: 1000,
      },
      moveIcon: new DivIcon({
        iconSize: new Point(8, 8),
        className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-move',
      }),
      resizeIcon: new DivIcon({
        iconSize: new Point(8, 8),
        className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-resize',
      }),
      touchMoveIcon: new DivIcon({
        iconSize: new Point(8, 8),
        className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-move leaflet-touch-icon',
      }),
      touchResizeIcon: new DivIcon({
        iconSize: new Point(8, 8),
        className: 'leaflet-div-icon leaflet-editing-icon leaflet-edit-resize leaflet-touch-icon',
      }),
      ...edit?.edit,
    },
  };
}
