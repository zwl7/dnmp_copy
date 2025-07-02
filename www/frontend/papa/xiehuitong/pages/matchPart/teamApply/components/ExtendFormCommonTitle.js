"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "ExtendFormCommonTitle",
  props: {
    title: {
      type: String,
      default: "报名表单信息"
    }
  },
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-153f1e80"]]);
wx.createComponent(Component);
