"use strict";
const store_app_index = require("../store/app/index.js");
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "default",
  data() {
    return {
      themeConfig: store_app_index.useAppStore().themeConfigGetter
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($data.themeConfig)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19b56bd5"]]);
wx.createComponent(Component);
