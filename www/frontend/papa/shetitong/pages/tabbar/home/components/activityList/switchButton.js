"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "TabSwitch",
  data() {
    return {
      currentTab: "new"
      // 默认选中热门
    };
  },
  methods: {
    switchTab(tab) {
      this.currentTab = tab;
      this.$emit("change", tab);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.currentTab === "new"
  }, $data.currentTab === "new" ? {} : {}, {
    b: $data.currentTab === "new" ? 1 : "",
    c: common_vendor.o(($event) => $options.switchTab("new")),
    d: $data.currentTab === "hot"
  }, $data.currentTab === "hot" ? {} : {}, {
    e: $data.currentTab === "hot" ? 1 : "",
    f: common_vendor.o(($event) => $options.switchTab("hot"))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1e4bd579"]]);
wx.createComponent(Component);
//# sourceMappingURL=switchButton.js.map
