"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  name: "RecordItem",
  props: {
    title: {
      type: String,
      default: ""
    }
  },
  computed: {
    showDate() {
      return this.title && this.title.length > 0;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.showDate
  }, $options.showDate ? {} : {}, {
    b: $options.showDate
  }, $options.showDate ? {
    c: common_vendor.t($props.title)
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-91df315d"]]);
wx.createComponent(Component);
//# sourceMappingURL=index.js.map
