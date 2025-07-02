"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_easycom_uv_empty2 + _component_layout_default_uni)();
}
const _easycom_uv_empty = () => "../../../node-modules/@climblee/uv-ui/components/uv-empty/uv-empty.js";
if (!Math) {
  _easycom_uv_empty();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      mode: "page",
      text: "404"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
