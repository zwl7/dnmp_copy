"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "weekCalendar",
  props: {
    list: {
      type: Array,
      default: () => {
        return [];
      }
    },
    currentPick: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {};
  },
  methods: {
    handlePick(item) {
      this.$emit("click", item);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(7, (item, k0, i0) => {
      return {
        a: common_vendor.n($props.currentPick == item ? "active-week" : "default-week"),
        b: common_vendor.o(($event) => $options.handlePick(item), item),
        c: item
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2ee0359c"]]);
wx.createComponent(Component);
