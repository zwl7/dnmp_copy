"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "noticeBar",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    clickItem(item) {
      this.$emit("click", item);
    },
    clickIcon() {
      this.$emit("clickIcon");
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
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: index,
        c: common_vendor.o(($event) => $options.clickItem(item), index)
      };
    }),
    b: common_vendor.o($options.clickIcon),
    c: common_vendor.p({
      type: "forward",
      size: "18"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/noticeBar.vue"]]);
wx.createComponent(Component);
