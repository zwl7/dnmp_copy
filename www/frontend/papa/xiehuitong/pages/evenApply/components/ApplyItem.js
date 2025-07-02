"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "ApplyItem",
  emits: ["toDetail"],
  props: {
    info: {
      type: Object,
      default: () => {
      }
    }
  },
  watch: {},
  data() {
    return {};
  },
  methods: {
    toDetail() {
      this.$emit("toDetail");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.info.event_name),
    b: common_vendor.t($props.info.name),
    c: common_vendor.t($props.info.apply_time),
    d: common_vendor.o((...args) => $options.toDetail && $options.toDetail(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-5a0f2748"]]);
wx.createComponent(Component);
