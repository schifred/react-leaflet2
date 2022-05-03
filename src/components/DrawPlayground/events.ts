import Leaflet, { FeatureGroup as LeafletFeatureGroup, LeafletEvent } from 'leaflet';
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
  /**
   * 变更事件
   * @description       变更事件
   * @default           undefined
   */
  onChange?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 新建完成事件
   * @description       新建完成事件
   * @default           undefined
   */
  onCreated?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 所有图形编辑完成事件
   * @description       所有图形编辑完成事件
   * @default           undefined
   */
  onEdited?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 新建功能启用事件
   * @description       新建功能启用事件
   * @default           undefined
   */
  onDrawStart?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 新建功能终止事件（包含完成或取消、ECS取消）
   * @description       新建功能终止事件（包含完成或取消、ECS取消）
   * @default           undefined
   */
  onDrawStop?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 新建过程顶点拖拽、添加、移除事件
   * @description       新建过程顶点拖拽、添加、移除事件
   * @default           undefined
   */
  onDrawVertex?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 编辑功能启用事件
   * @description       编辑功能启用事件
   * @default           undefined
   */
  onEditStart?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 图形移动事件（比如圆心、矩形中心的移动）
   * @description       图形移动事件（比如圆心、矩形中心的移动）
   * @default           undefined
   */
  onEditMove?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 图形缩放事件（比如圆或矩形）
   * @description       图形缩放事件（比如圆或矩形）
   * @default           undefined
   */
  onEditResize?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 角点编辑事件
   * @description       角点编辑事件
   * @default           undefined
   */
  onEditVertex?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 编辑功能终止事件（包含保存或取消）
   * @description       编辑功能终止事件（包含保存或取消）
   * @default           undefined
   */
  onEditStop?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 删除并保存事件
   * @description       删除并保存事件
   * @default           undefined
   */
  onDeleted?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 删除功能启用事件
   * @description       删除功能启用事件
   * @default           undefined
   */
  onDeleteStart?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 删除功能终止事件（包含保存或取消）
   * @description       删除功能终止事件（包含保存或取消）
   * @default           undefined
   */
  onDeleteStop?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 线段或多边形 marker 右击事件
   * @description       线段或多边形 marker 右击事件
   * @default           undefined
   */
  onMarkerContext?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 工具条展开事件
   * @description       工具条展开事件
   * @default           undefined
   */
  onToolbarClosed?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
  /**
   * 工具条折叠事件
   * @description       工具条折叠事件
   * @default           undefined
   */
  onToolbarOpened?: EventHandler<LeafletEvent, LeafletFeatureGroup>;
};
