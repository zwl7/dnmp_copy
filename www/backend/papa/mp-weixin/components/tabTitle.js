"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "tabTitle",
  props: {
    title: {
      type: String,
      default: ""
    },
    showMore: {
      type: Boolean,
      default: false
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
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($props.title),
    b: $props.showMore
  }, $props.showMore ? {
    c: common_vendor.p({
      type: "forward",
      size: "16"
    }),
    d: common_vendor.o((...args) => $options.handleMore && $options.handleMore(...args))
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/tabTitle.vue"]]);
wx.createComponent(Component);
