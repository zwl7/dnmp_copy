"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  props: {
    prefix: {
      type: String,
      default: "icon-"
    },
    name: {
      type: String,
      required: true
    },
    deepClass: {
      type: [String, Object, Array],
      default: () => []
    }
  },
  computed: {
    iconName() {
      return `${this.prefix}${this.name}`;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.n($props.deepClass),
    b: common_vendor.n($options.iconName)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
