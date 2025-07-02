"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    total: {
      type: Number,
      default: 0
    },
    title: {
      type: String,
      default: ""
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.total),
    b: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0dd56cbb"]]);
wx.createComponent(Component);
//# sourceMappingURL=mapTouchTitle.js.map
