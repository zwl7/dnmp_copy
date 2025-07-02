"use strict";
const common_vendor = require("../../../../../common/vendor.js");
const _sfc_main = {
  name: "activityListHeder",
  components: {},
  props: {
    title: {
      type: String,
      default: ""
    },
    imageUrl: {
      type: String,
      default: "https://cdn-static.papa.com.cn/social/txrh.png"
    }
  },
  methods: {
    handleChange(e) {
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.imageUrl,
    b: $props.title,
    c: common_vendor.t($props.title)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1a0d42fb"]]);
wx.createComponent(Component);
//# sourceMappingURL=cardHeader.js.map
