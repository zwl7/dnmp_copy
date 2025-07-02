"use strict";
const common_vendor = require("../../../common/vendor.js");
const navBar = () => "../../../components/navBar/index.js";
const _sfc_main = {
  name: "dataOverview",
  components: {
    navBar
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_navBar = common_vendor.resolveComponent("navBar");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_navBar + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      showBack: true,
      navColor: "transparent"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-8a7adf72"]]);
wx.createPage(MiniProgramPage);
