"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "coupon",
  data() {
    return {
      image_src: "https://cdn-static.papa.com.cn/shandong/changguanyuyue.png",
      title: "体育地图",
      tip: "你的寻宝地图"
    };
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.title),
    b: common_vendor.t($data.tip),
    c: $data.image_src,
    d: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/coupon.vue"]]);
wx.createComponent(Component);
