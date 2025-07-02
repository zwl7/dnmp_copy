"use strict";
const common_vendor = require("../../common/vendor.js");
const paTag = () => "../../components/paTag/index.js";
const bottomButton = () => "../../components/bottomButton.js";
const _sfc_main = {
  name: "demo",
  components: {
    paTag,
    bottomButton
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_pa_tag = common_vendor.resolveComponent("pa-tag");
  const _component_bottomButton = common_vendor.resolveComponent("bottomButton");
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  (_component_pa_tag + _component_bottomButton + _component_layout_default_uni)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      disabled: false,
      loading: false,
      buttonType: "primary"
    }),
    b: common_vendor.p({
      disabled: false,
      loading: false,
      buttonType: "lesser"
    }),
    c: common_vendor.p({
      disabled: false,
      loading: false,
      buttonType: "plain"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
