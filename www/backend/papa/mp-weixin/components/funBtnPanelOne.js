"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "funBtnPanelOne",
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
    handleClick(item) {
      this.$emit("click", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, index, i0) => {
      return {
        a: item.image,
        b: common_vendor.t(item.title),
        c: index,
        d: common_vendor.o(($event) => $options.handleClick(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/gxm/uniapp-shandong/components/funBtnPanelOne.vue"]]);
wx.createComponent(Component);
