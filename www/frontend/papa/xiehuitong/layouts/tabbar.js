"use strict";
const store_app_index = require("../store/app/index.js");
const common_vendor = require("../common/vendor.js");
const myTabBar = () => "../components/my-tab-bar/index.js";
const _sfc_main = {
  name: "tabbar",
  components: {
    myTabBar
  },
  data() {
    return {};
  },
  computed: {
    themeConfig() {
      return store_app_index.useAppStore().themeConfigGetter;
    }
  },
  onLoad(options) {
    console.log("onLoad");
  },
  created() {
  }
};
if (!Array) {
  const _component_my_tab_bar = common_vendor.resolveComponent("my-tab-bar");
  _component_my_tab_bar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.themeConfig)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-808a5a56"]]);
wx.createComponent(Component);
