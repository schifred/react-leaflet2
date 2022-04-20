import Leaflet from 'leaflet';

Leaflet.drawLocal = {
  draw: {
    toolbar: {
      actions: {
        title: '取消绘制',
        text: '取消',
      },
      finish: {
        title: '完成绘制',
        text: '完成',
      },
      undo: {
        title: '删除最后一个已绘制的点',
        text: '删除最后一个点',
      },
      buttons: {
        polyline: '绘制线',
        polygon: '绘制面',
        rectangle: '绘制矩形',
        circle: '绘制圆',
        marker: '绘制点标记',
        circlemarker: '绘制圆标记',
      },
    },
    handlers: {
      circle: {
        tooltip: {
          start: '点击拖动绘制圆',
        },
      },
      circlemarker: {
        tooltip: {
          start: '点击绘制圆标记',
        },
      },
      marker: {
        tooltip: {
          start: '点击地图绘制',
        },
      },
      polygon: {
        tooltip: {
          start: '点击开始绘制',
          cont: '点击继续绘制',
          end: '双击完成绘制',
        },
      },
      polyline: {
        error: '<strong>错误:</strong> 图形不能交叉',
        tooltip: {
          start: '点击开始绘制',
          cont: '点击继续绘制',
          end: '点击完成绘制',
        },
      },
      rectangle: {
        tooltip: {
          start: '点击拖动绘制矩形',
        },
      },
      simpleshape: {
        tooltip: {
          end: '释放鼠标完成绘制',
        },
      },
    },
  },
  edit: {
    toolbar: {
      actions: {
        save: {
          title: '保存修改',
          text: '保存',
        },
        cancel: {
          title: '取消编辑,放弃所有修改',
          text: '取消',
        },
        clearAll: {
          title: '清除所有图层',
          text: '清除',
        },
      },
      buttons: {
        edit: '编辑图形',
        editDisabled: '当前没的图形可编辑',
        remove: '删除图形',
        removeDisabled: '当前没的图形可删除',
      },
    },
    handlers: {
      edit: {
        tooltip: {
          text: '点取消放弃修改',
          subtext: '拖动节点进行修改',
        },
      },
      remove: {
        tooltip: {
          text: '右击需要删除的图形',
        },
      },
    },
  },
};
