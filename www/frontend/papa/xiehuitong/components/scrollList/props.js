"use strict";
const props = {
  props: {
    // 指示器的整体宽度
    indicatorWidth: {
      type: [String, Number],
      default: 50
    },
    // 滑块的宽度
    indicatorBarWidth: {
      type: [String, Number],
      default: 20
    },
    // 是否显示面板指示器
    indicator: {
      type: Boolean,
      default: true
    },
    // 指示器非激活颜色
    indicatorColor: {
      type: String,
      default: "#f2f2f2"
    },
    // 指示器的激活颜色
    indicatorActiveColor: {
      type: String,
      default: "#F4443A"
    },
    // 指示器样式，可通过bottom，left，right进行定位
    indicatorStyle: {
      type: [String, Object],
      default: ""
    }
  }
};
exports.props = props;
