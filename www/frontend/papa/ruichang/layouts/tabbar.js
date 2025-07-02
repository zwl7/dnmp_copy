"use strict";
const store_app_index = require("../store/app/index.js");
const common_vendor = require("../common/vendor.js");
const myTabBar = () => "../components/my-tab-bar/index.js";
const _sfc_main = {
  name: "default",
  components: {
    myTabBar
  },
  data() {
    return {
      themeConfig: store_app_index.useAppStore().themeConfig
    };
  },
  onLoad(options) {
  }
};
if (!Array) {
  const _component_my_tab_bar = common_vendor.resolveComponent("my-tab-bar");
  _component_my_tab_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($data.themeConfig)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=tabbar.js.map
