"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "indexTopSearch",
  props: {
    city: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  methods: {
    handleSearch() {
      common_vendor.index.navigateTo({
        url: "/pages/search/search"
      });
    },
    selectCity() {
      let isShandongPlatform = getApp().globalData.isShandongPlatform;
      if (!isShandongPlatform) {
        common_vendor.index.navigateTo({
          url: "/pages/areaSearchNew/areaSearchNew"
        });
      } else {
        common_vendor.index.navigateTo({
          url: "/pages/areaSearch/areaSearch"
        });
      }
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
  return {
    a: common_vendor.t($props.city),
    b: common_vendor.p({
      type: "bottom",
      size: "18"
    }),
    c: common_vendor.o((...args) => $options.selectCity && $options.selectCity(...args)),
    d: common_vendor.p({
      type: "search",
      size: "18",
      color: "#999"
    }),
    e: common_vendor.o((...args) => $options.handleSearch && $options.handleSearch(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-6b6f55f1"], ["__file", "E:/gxm/uniapp-shandong/components/indexTopSearch.vue"]]);
wx.createComponent(Component);
