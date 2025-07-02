"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "loadMore",
  props: {
    status: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_uv_load_more2 = common_vendor.resolveComponent("uv-load-more");
  _easycom_uv_load_more2();
}
const _easycom_uv_load_more = () => "../node-modules/@climblee/uv-ui/components/uv-load-more/uv-load-more.js";
if (!Math) {
  _easycom_uv_load_more();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      status: $props.status
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
