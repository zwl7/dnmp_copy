"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "historyItem",
  emits: ["clear", "search"],
  props: {
    searchKeywordList: {
      type: Array,
      default: []
    },
    hotKeyword: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  },
  created() {
  },
  methods: {
    clearHistory() {
      this.$emit("clear");
    },
    handleClick(item) {
      this.$emit("search", item);
    },
    clearHistoryItem(item) {
      this.$emit("clearItem", item);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_icon2 = common_vendor.resolveComponent("uv-icon");
  (_easycom_uni_icons2 + _easycom_uv_icon2)();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_icon = () => "../../../node-modules/@climblee/uv-ui/components/uv-icon/uv-icon.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uv_icon)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.clearHistory),
    b: common_vendor.p({
      type: "trash",
      size: "20",
      color: "#909399"
    }),
    c: common_vendor.f($props.searchKeywordList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.o(($event) => $options.handleClick(item), index),
        c: "870100e4-1-" + i0,
        d: common_vendor.o(($event) => $options.clearHistoryItem(item), index),
        e: index
      };
    }),
    d: common_vendor.p({
      name: "close",
      size: "12"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-870100e4"]]);
wx.createComponent(Component);
