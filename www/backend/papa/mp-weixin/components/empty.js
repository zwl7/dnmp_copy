"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "empty",
  props: {
    title: String,
    tip: String,
    showPaddingTop: {
      type: Boolean,
      default: true
    },
    paddingTop: {
      type: String,
      default: "300rpx"
    }
  },
  data() {
    return {
      image: "https://cdn-static.papa.com.cn/shandong/no_data.png"
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.image,
    b: common_vendor.t($props.title),
    c: common_vendor.t($props.tip),
    d: $props.paddingTop
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/empty.vue"]]);
wx.createComponent(Component);
