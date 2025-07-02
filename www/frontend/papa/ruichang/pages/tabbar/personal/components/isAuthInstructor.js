"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "stadiumJoinCard",
  data() {
    return {};
  },
  methods: {
    handleAuthInstructor() {
      common_vendor.index.navigateTo({
        url: "/pages-sub/realname/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.handleAuthInstructor && $options.handleAuthInstructor(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8e8f2d53"]]);
wx.createComponent(Component);
//# sourceMappingURL=isAuthInstructor.js.map
