"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "fitnessTrailItem",
  props: {
    info: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    handleClick() {
      this.$emit("click");
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.info.images,
    b: common_vendor.t($props.info.name),
    c: common_vendor.o((...args) => $options.handleClick && $options.handleClick(...args))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-06524264"]]);
wx.createComponent(Component);
