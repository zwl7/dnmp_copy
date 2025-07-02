"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "skeleton",
  props: {
    type: {
      type: String,
      default: "list"
    }
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.type == "list"
  }, $props.type == "list" ? {} : {}, {
    b: $props.type == "detail"
  }, $props.type == "detail" ? {} : {}, {
    c: $props.type == "index"
  }, $props.type == "index" ? {
    d: common_vendor.f(4, (item, k0, i0) => {
      return {
        a: item
      };
    }),
    e: common_vendor.f(4, (item, k0, i0) => {
      return {
        a: item
      };
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d9765a0"], ["__file", "E:/gxm/uniapp-shandong/components/skeleton.vue"]]);
wx.createComponent(Component);
