"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "step",
  emits: ["update:value", "clickInput", "blurInput"],
  props: {
    step: {
      type: Number,
      default: 1
    }
  },
  computed: {},
  data() {
    return {};
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.step == 2 ? "activity" : "")
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
