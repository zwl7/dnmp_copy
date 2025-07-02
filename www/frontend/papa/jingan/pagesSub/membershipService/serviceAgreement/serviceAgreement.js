"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      type: 2
    };
  },
  onLoad(option) {
    if (option.type) {
      this.type = option.type;
    }
  },
  methods: {}
};
if (!Array) {
  const _component_layout_default_uni = common_vendor.resolveComponent("layout-default-uni");
  _component_layout_default_uni();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $data.type == 1
  }, $data.type == 1 ? {} : {}, {
    b: $data.type == 2
  }, $data.type == 2 ? {} : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6a064dfe"]]);
wx.createPage(MiniProgramPage);
