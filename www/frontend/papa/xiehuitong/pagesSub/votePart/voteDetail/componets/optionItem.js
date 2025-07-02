"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "optionItem",
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      default_img: "https://cdn-static.papa.com.cn/yuncheng/voteZone/vote-default-avatar.png"
    };
  },
  methods: {
    handlePick() {
      this.$emit("click", this.info);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.number),
    b: $props.info.images || $data.default_img,
    c: common_vendor.t($props.info.name),
    d: common_vendor.t($props.info.vote_count),
    e: common_vendor.o((...args) => $options.handlePick && $options.handlePick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-110ef29d"]]);
wx.createComponent(Component);
