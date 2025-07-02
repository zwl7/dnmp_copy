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
    console.log(3213213);
  },
  methods: {
    clearHistory() {
      this.$emit("clear");
    },
    handleClick(item) {
      this.$emit("search", item);
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.clearHistory),
    b: common_vendor.p({
      type: "trash-filled",
      size: "22",
      color: "#909399"
    }),
    c: common_vendor.f($props.searchKeywordList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.handleClick(item), index)
      };
    }),
    d: common_vendor.f($props.hotKeyword, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: index,
        c: common_vendor.o(($event) => $options.handleClick(item), index)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4a600d49"], ["__file", "E:/gxm/uniapp-shandong/pages/search/components/historyItem.vue"]]);
wx.createComponent(Component);
