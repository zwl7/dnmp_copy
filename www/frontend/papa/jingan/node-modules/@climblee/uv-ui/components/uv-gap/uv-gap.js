"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "uv-gap",
  mixins: [common_vendor.mpMixin, common_vendor.mixin, common_vendor.props$30],
  computed: {
    gapStyle() {
      const style = {
        backgroundColor: this.bgColor,
        height: this.$uv.addUnit(this.height),
        marginTop: this.$uv.addUnit(this.marginTop),
        marginBottom: this.$uv.addUnit(this.marginBottom)
      };
      return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.s($options.gapStyle)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
