"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "searchTitle",
  emits: ["more"],
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    handleMore() {
      this.$emit("more");
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.p({
      type: "forward",
      size: "12"
    }),
    c: common_vendor.o((...args) => $options.handleMore && $options.handleMore(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3b7d2554"]]);
wx.createComponent(Component);
