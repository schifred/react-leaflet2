import {
  Map as LeafletMap,
  LayersControlEvent,
  LayerEvent,
  LeafletEvent,
  ResizeEvent,
  ErrorEvent,
  LocationEvent,
  LeafletMouseEvent,
  LeafletKeyboardEvent,
  ZoomAnimEvent,
} from 'leaflet';
import { InteractiveEvents, PopupEvents, TooltipEvents } from '../../_events';
import type { EventHandler } from '../../../types';

export const Events = {
  onBaseLayerChange: 'baselayerchange',
  onOverlayAdd: 'overlayadd',
  onOverlayRemove: 'overlayremove',
  onLayerAdd: 'layeradd',
  onLayerRemove: 'layerremove',
  onZoomLevelsChange: 'zoomlevelschange',
  onResize: 'resize',
  onUnload: 'unload',
  onViewReset: 'viewreset',
  onLoad: 'load',
  onZoomStart: 'zoomstart',
  onMoveStart: 'movestart',
  onZoom: 'zoom',
  onMove: 'move',
  onZoomEnd: 'zoomend',
  onMoveEnd: 'moveend',
  onAutoPanStart: 'autopanstart',
  onLocationError: 'locationerror',
  onLocationFound: 'locationfound',
  ...InteractiveEvents.Events,
  ...PopupEvents.Events,
  ...TooltipEvents.Events,
  onMouseMove: 'mousemove',
  onKeyPress: 'keypress',
  onKeyDown: 'keydown',
  onKeyUp: 'keyup',
  onPreClick: 'preclick',
  onZoomAnim: 'zoomanim',
};

export type Methods = {
  /**
   * 基础图层切换事件
   * @description       基础图层切换事件
   * @default           undefined
   */
  onBaseLayerChange?: EventHandler<LayersControlEvent, LeafletMap>;
  /**
   * 覆盖图层切换事件
   * @description       覆盖图层切换事件
   * @default           undefined
   */
  onOverlayAdd?: EventHandler<LayersControlEvent, LeafletMap>;
  /**
   * 覆盖图层移除事件
   * @description       覆盖图层移除事件
   * @default           undefined
   */
  onOverlayRemove?: EventHandler<LayersControlEvent, LeafletMap>;
  /**
   * 图层添加事件
   * @description       图层添加事件
   * @default           undefined
   */
  onLayerAdd?: EventHandler<LayerEvent, LeafletMap>;
  /**
   * 图层移除事件
   * @description       图层移除事件
   * @default           undefined
   */
  onLayerRemove?: EventHandler<LayerEvent, LeafletMap>;
  /**
   * 缩放级别变更事件
   * @description       缩放级别变更事件
   * @default           undefined
   */
  onZoomLevelsChange?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 尺寸调整事件
   * @description       尺寸调整事件
   * @default           undefined
   */
  onResize?: EventHandler<ResizeEvent, LeafletMap>;
  /**
   * 未加载事件
   * @description       未加载事件
   * @default           undefined
   */
  onUnload?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 视图重置事件
   * @description       视图重置事件
   * @default           undefined
   */
  onViewReset?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 加载事件
   * @description       加载事件
   * @default           undefined
   */
  onLoad?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 缩放级别调整开始事件
   * @description       缩放级别调整开始事件
   * @default           undefined
   */
  onZoomStart?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 移动开始事件
   * @description       移动开始事件
   * @default           undefined
   */
  onMoveStart?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 缩放级别调整事件
   * @description       缩放级别调整事件
   * @default           undefined
   */
  onZoom?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 移动事件
   * @description       移动事件
   * @default           undefined
   */
  onMove?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 缩放级别调整结束事件
   * @description       缩放级别调整结束事件
   * @default           undefined
   */
  onZoomEnd?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 移动结束事件
   * @description       移动结束事件
   * @default           undefined
   */
  onMoveEnd?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 弹层打开时 autopan 事件
   * @description       弹层打开时 autopan 事件
   * @default           undefined
   */
  onAutoPanStart?: EventHandler<LeafletEvent, LeafletMap>;
  /**
   * 用户位置未找到事件
   * @description       用户位置未找到事件
   * @default           undefined
   */
  onLocationError?: EventHandler<ErrorEvent, LeafletMap>;
  /**
   * 用户位置找到事件
   * @description       用户位置找到事件
   * @default           undefined
   */
  onLocationFound?: EventHandler<LocationEvent, LeafletMap>;
  /**
   * 鼠标移动事件
   * @description       鼠标移动事件
   * @default           undefined
   */
  onMouseMove?: EventHandler<LeafletMouseEvent, LeafletMap>;
  /**
   * 字符按键按下时事件
   * @description       字符按键按下时事件
   * @default           undefined
   */
  onKeyPress?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  /**
   * 按键按下时事件
   * @description       按键按下时事件
   * @default           undefined
   */
  onKeyDown?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  /**
   * 按键松开事件
   * @description       按键松开事件
   * @default           undefined
   */
  onKeyUp?: EventHandler<LeafletKeyboardEvent, LeafletMap>;
  /**
   * 点击前事件
   * @description       点击前事件
   * @default           undefined
   */
  onPreClick?: EventHandler<LeafletMouseEvent, LeafletMap>;
  /**
   * 缩放动效事件
   * @description       缩放动效事件
   * @default           undefined
   */
  onZoomAnim?: EventHandler<ZoomAnimEvent, LeafletMap>;
} & InteractiveEvents.Methods<LeafletMap> &
  PopupEvents.Methods<LeafletMap> &
  TooltipEvents.Methods<LeafletMap>;
