"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  name: "staticInfoCard",
  props: {
    des: {
      type: String,
      default: ""
    }
  },
  data() {
    return {};
  },
  computed: {
    descIcon() {
      return this.$store.app.currentThemeIconByType["DESC_ICON"];
    }
  },
  methods: {}
};
if (!Array) {
  const _component_empty = common_vendor.resolveComponent("empty");
  _component_empty();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.descIcon,
    b: $props.des,
    c: !$props.des
  }, !$props.des ? {
    d: common_vendor.p({
      marginTop: "32rpx"
    })
  } : {});
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b262da91"]]);
wx.createComponent(Component);
//# sourceMappingURL=staticInfoCard.js.map
