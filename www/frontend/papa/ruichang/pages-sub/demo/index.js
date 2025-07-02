"use strict";
const common_vendor = require("../../common/vendor.js");
const paBackToTop = () => "../../components/paBackToTop/index.js";
const _sfc_main = {
  components: {
    paBackToTop
  },
  data() {
    return {
      scrollTop: 0
    };
  },
  onPageScroll(e) {
    this.scrollTop = e.scrollTop;
  },
  onLoad() {
    common_vendor.index.setNavigationBarColor({
      frontColor: "#ffffff",
      backgroundColor: "#f2f2f2"
    });
  }
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
_sfc_main.__runtimeHooks = 1;
wx.createPage(MiniProgramPage);
//# sourceMappingURL=index.js.map
