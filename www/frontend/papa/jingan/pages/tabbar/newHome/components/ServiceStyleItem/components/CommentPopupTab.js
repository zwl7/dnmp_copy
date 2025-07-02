"use strict";
const common_vendor = require("../../../../../../common/vendor.js");
const _sfc_main = {
  name: "CommentPopupTab",
  props: {
    activeTab: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      // activeTab: 0, // 当前选中的tab
    };
  },
  methods: {
    changeTab(index) {
      this.$emit("change", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.activeTab === 0 ? 1 : "",
    b: common_vendor.o(($event) => $options.changeTab(0)),
    c: $props.activeTab === 1 ? 1 : "",
    d: common_vendor.o(($event) => $options.changeTab(1))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d28c6ddc"]]);
wx.createComponent(Component);
