import Leaflet, { FeatureGroup as LeafletFeatureGroup, LeafletEvent } from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw.css';
import type { EventHandler } from '../../types';
import './language';

export const ControlDrawEvent = {
  onCreated: Leaflet.Draw.Event.CREATED,
  onEdited: Leaflet.Draw.Event.EDITED,
  onDrawStart: Leaflet.Draw.Event.DRAWSTART,
  onDrawStop: Leaflet.Draw.Event.DRAWSTOP,
  onDrawVertex: Leaflet.Draw.Event.DRAWVERTEX,
  onEditStart: Leaflet.Draw.Event.EDITSTART,
  onEditMove: Leaflet.Draw.Event.EDITMOVE,
  onEditResize: Leaflet.Draw.Event.EDITRESIZE,
  onEditVertex: Leaflet.Draw.Event.EDITVERTEX,
  onEditStop: Leaflet.Draw.Event.EDITSTOP,
  onDeleted: Leaflet.Draw.Event.DELETED,
  onDeleteStart: Leaflet.Draw.Event.DELETESTART,
  onDeleteStop: Leaflet.Draw.Event.DELETESTOP,
  onMarkerContext: Leaflet.Draw.Event.MARKERCONTEXT,
  onToolbarClosed: Leaflet.Draw.Event.TOOLBARCLOSED,
  onToolbarOpened: Leaflet.Draw.Event.TOOLBAROPENED,
};

export type Methods = {
  onChange?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onCreated?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onEdited?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onDrawStart?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onDrawStop?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onDrawVertex?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onEditStart?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onEditMove?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onEditResize?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onEditVertex?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onEditStop?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onDeleted?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onDeleteStart?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onDeleteStop?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onMarkerContext?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onToolbarClosed?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  onToolbarOpened?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
};
